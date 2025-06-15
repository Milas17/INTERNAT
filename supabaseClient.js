import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://nrjzmlqhtkltduxtpfyp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yanptbHFodGtsdGR1eHRwZnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NjMwMDUsImV4cCI6MjA2NTQzOTAwNX0.s2JQaJShJjEFeKgoli205qKv81v4bNjW3R9k28nTbtA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);