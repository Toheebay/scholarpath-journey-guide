-- Create user subscriptions table
CREATE TABLE public.user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES public.subscription_plans(id),
  status TEXT NOT NULL DEFAULT 'active',
  documents_used INTEGER DEFAULT 0,
  premium_passcode TEXT,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create documents generation table
CREATE TABLE public.generated_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL, -- 'sop', 'cv', 'letter'
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  research_topic TEXT,
  format TEXT NOT NULL DEFAULT 'text', -- 'text', 'pdf', 'word'
  file_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.generated_documents ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_subscriptions  
CREATE POLICY "Users can view their own subscription" ON public.user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own subscription" ON public.user_subscriptions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own subscription" ON public.user_subscriptions
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for generated_documents
CREATE POLICY "Users can view their own documents" ON public.generated_documents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own documents" ON public.generated_documents
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own documents" ON public.generated_documents
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own documents" ON public.generated_documents
  FOR DELETE USING (auth.uid() = user_id);

-- Update subscription plans with correct data
UPDATE public.subscription_plans SET 
  name = 'Trial/Freemium',
  description = 'Limited free use (1 SOP or CV only)',
  price = 0.00,
  features = ARRAY['1 Document Generation', 'Basic Templates'],
  duration_months = NULL
WHERE name = 'Basic Plan';

INSERT INTO public.subscription_plans (name, description, price, features, duration_months) VALUES
('Basic', 'Unlimited SOP/CV/Letter Generation', 3.28, ARRAY['Unlimited Document Generation', 'AI Writing Assistant', 'Professional Templates'], 1),
('Standard', 'Basic + Research Process Support', 10.00, ARRAY['All Basic Features', 'Research Process Support', 'Advanced AI Assistance', 'Priority Templates'], 1),
('Premium', 'Includes SOP review, editing support, priority help', 25.00, ARRAY['All Standard Features', 'SOP Review & Editing', 'Priority Support', 'Premium Templates', 'PDF & Word Export'], 1)
ON CONFLICT (name) DO NOTHING;

-- Create trigger for updated_at
CREATE TRIGGER update_user_subscriptions_updated_at
  BEFORE UPDATE ON public.user_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_generated_documents_updated_at
  BEFORE UPDATE ON public.generated_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();