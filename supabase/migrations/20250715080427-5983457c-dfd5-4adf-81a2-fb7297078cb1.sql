
-- Insert admin user profile
INSERT INTO public.profiles (id, username, email, user_type, agent_code)
VALUES (
  'adebayo-admin-id'::uuid,
  'adebayo',
  'adebayo@admin.com',
  'admin',
  '952'
)
ON CONFLICT (id) DO NOTHING;

-- Note: The actual auth user will be created when someone signs up with adebayo@admin.com
-- This profile entry ensures they have admin privileges once they authenticate
