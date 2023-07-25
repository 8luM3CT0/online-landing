import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://joszfjstfxchisajaiye.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impvc3pmanN0ZnhjaGlzYWphaXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwNzQxMjcsImV4cCI6MjAwMjY1MDEyN30.l9bAK4GP1SGcYdSCGkxzC-12ZVBRLsIlFBuihFA-F_0'
export const supabase = createClient(supabaseUrl, supabaseKey)