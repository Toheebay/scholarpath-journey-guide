
-- Create user profiles table for extended user information
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  full_name TEXT,
  phone TEXT,
  country TEXT,
  current_degree_level TEXT,
  field_of_study TEXT,
  gpa DECIMAL(3,2),
  target_countries TEXT[],
  target_degree_levels TEXT[],
  preferred_languages TEXT[],
  goals TEXT,
  bio TEXT,
  profile_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create scholarships table for 10,000+ scholarship records
CREATE TABLE public.scholarships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(12,2),
  currency TEXT DEFAULT 'USD',
  country TEXT NOT NULL,
  university TEXT,
  degree_levels TEXT[] NOT NULL,
  fields_of_study TEXT[] NOT NULL,
  language_requirements TEXT[],
  eligibility_criteria TEXT,
  application_deadline DATE,
  application_url TEXT,
  requirements TEXT[],
  benefits TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create applications table for tracking user applications
CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  scholarship_id UUID REFERENCES public.scholarships(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'applied', 'under_review', 'accepted', 'rejected', 'withdrawn')),
  application_date DATE,
  deadline_date DATE,
  notes TEXT,
  follow_up_date DATE,
  documents_submitted TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create documents table for storing user documents
CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('sop', 'cv', 'motivation_letter', 'transcript', 'recommendation_letter', 'other')),
  content TEXT,
  file_url TEXT,
  version INTEGER DEFAULT 1,
  is_template BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notifications table for alerts and reminders
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'reminder' CHECK (type IN ('deadline', 'reminder', 'update', 'community')),
  is_read BOOLEAN DEFAULT false,
  action_url TEXT,
  scheduled_for TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user roadmaps table for personalized plans
CREATE TABLE public.user_roadmaps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  steps JSONB, -- Array of step objects with title, description, completed, due_date
  progress_percentage INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create document templates table for AI-powered templates
CREATE TABLE public.document_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('sop', 'cv', 'motivation_letter')),
  content TEXT NOT NULL,
  variables JSONB, -- Template variables for personalization
  category TEXT,
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create saved scholarships table for bookmarking
CREATE TABLE public.saved_scholarships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  scholarship_id UUID REFERENCES public.scholarships(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, scholarship_id)
);

-- Enable Row Level Security on all tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roadmaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_scholarships ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_profiles
CREATE POLICY "Users can view their own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own profile" ON public.user_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for scholarships (public read)
CREATE POLICY "Anyone can view active scholarships" ON public.scholarships
  FOR SELECT USING (is_active = true);

-- Create RLS policies for applications
CREATE POLICY "Users can view their own applications" ON public.applications
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own applications" ON public.applications
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own applications" ON public.applications
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own applications" ON public.applications
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for documents
CREATE POLICY "Users can view their own documents" ON public.documents
  FOR SELECT USING (auth.uid() = user_id OR is_template = true);
CREATE POLICY "Users can create their own documents" ON public.documents
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own documents" ON public.documents
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own documents" ON public.documents
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for notifications
CREATE POLICY "Users can view their own notifications" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own notifications" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for user_roadmaps
CREATE POLICY "Users can view their own roadmaps" ON public.user_roadmaps
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own roadmaps" ON public.user_roadmaps
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own roadmaps" ON public.user_roadmaps
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own roadmaps" ON public.user_roadmaps
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for document_templates (public read)
CREATE POLICY "Anyone can view document templates" ON public.document_templates
  FOR SELECT USING (true);

-- Create RLS policies for saved_scholarships
CREATE POLICY "Users can view their own saved scholarships" ON public.saved_scholarships
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can save scholarships" ON public.saved_scholarships
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove saved scholarships" ON public.saved_scholarships
  FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_scholarships_country ON public.scholarships(country);
CREATE INDEX idx_scholarships_degree_levels ON public.scholarships USING GIN(degree_levels);
CREATE INDEX idx_scholarships_fields_of_study ON public.scholarships USING GIN(fields_of_study);
CREATE INDEX idx_scholarships_deadline ON public.scholarships(application_deadline);
CREATE INDEX idx_applications_user_id ON public.applications(user_id);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_scheduled ON public.notifications(scheduled_for);

-- Create function to update updated_at timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at timestamps
CREATE TRIGGER set_updated_at_user_profiles
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_scholarships
  BEFORE UPDATE ON public.scholarships
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_applications
  BEFORE UPDATE ON public.applications
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_documents
  BEFORE UPDATE ON public.documents
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_user_roadmaps
  BEFORE UPDATE ON public.user_roadmaps
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Insert some sample scholarships for testing
INSERT INTO public.scholarships (title, description, amount, country, degree_levels, fields_of_study, language_requirements, application_deadline, application_url) VALUES
('Global Excellence Scholarship', 'Full tuition scholarship for outstanding international students', 50000.00, 'United States', ARRAY['undergraduate', 'graduate'], ARRAY['engineering', 'computer science', 'mathematics'], ARRAY['english'], '2024-12-31', 'https://example.com/apply'),
('European Research Grant', 'Research funding for PhD students in STEM fields', 30000.00, 'Germany', ARRAY['phd'], ARRAY['engineering', 'physics', 'chemistry'], ARRAY['english', 'german'], '2024-11-30', 'https://example.com/apply'),
('Commonwealth Scholarship', 'Full scholarship for students from Commonwealth countries', 40000.00, 'United Kingdom', ARRAY['graduate', 'phd'], ARRAY['any'], ARRAY['english'], '2024-10-15', 'https://example.com/apply'),
('Asian Development Scholarship', 'Scholarship for students from developing Asian countries', 25000.00, 'Japan', ARRAY['graduate'], ARRAY['economics', 'development studies', 'public policy'], ARRAY['english', 'japanese'], '2024-09-30', 'https://example.com/apply'),
('Canadian Merit Award', 'Merit-based scholarship for international students', 35000.00, 'Canada', ARRAY['undergraduate', 'graduate'], ARRAY['any'], ARRAY['english', 'french'], '2024-08-31', 'https://example.com/apply');

-- Insert sample document templates
INSERT INTO public.document_templates (title, type, content, variables, category) VALUES
('Standard Statement of Purpose', 'sop', 'Dear Admissions Committee,\n\nI am writing to express my strong interest in the {{program_name}} program at {{university_name}}. With my background in {{field_of_study}} and {{years_experience}} years of experience in {{relevant_experience}}, I am confident that this program aligns perfectly with my academic and career goals.\n\n{{personal_story}}\n\nMy academic journey began with {{academic_background}}. During my studies, I developed a particular interest in {{specific_interest}}, which led me to {{relevant_projects}}.\n\n{{future_goals}}\n\nI am particularly drawn to {{university_name}} because of {{specific_reasons}}. I believe that the {{program_features}} will provide me with the knowledge and skills necessary to achieve my goals.\n\nThank you for your consideration.\n\nSincerely,\n{{full_name}}', '{"program_name": "", "university_name": "", "field_of_study": "", "years_experience": "", "relevant_experience": "", "personal_story": "", "academic_background": "", "specific_interest": "", "relevant_projects": "", "future_goals": "", "specific_reasons": "", "program_features": "", "full_name": ""}', 'academic'),
('Professional CV Template', 'cv', '{{full_name}}\n{{email}} | {{phone}} | {{location}}\n{{linkedin}} | {{website}}\n\nPROFESSIONAL SUMMARY\n{{professional_summary}}\n\nEDUCATION\n{{education_history}}\n\nEXPERIENCE\n{{work_experience}}\n\nSKILLS\n{{technical_skills}}\n{{soft_skills}}\n\nACHIEVEMENTS\n{{achievements}}\n\nCERTIFICATIONS\n{{certifications}}', '{"full_name": "", "email": "", "phone": "", "location": "", "linkedin": "", "website": "", "professional_summary": "", "education_history": "", "work_experience": "", "technical_skills": "", "soft_skills": "", "achievements": "", "certifications": ""}', 'professional');
