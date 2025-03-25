import { createClient } from '@supabase/supabase-js';

// 替換為你的 Supabase URL 和匿名 API 密鑰
const supabaseUrl = 'https://gyxrlfhplnhkpaehtgqe.supabase.co';  // 這個 URL 可以在 Supabase 項目頁面找到
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5eHJsZmhwbG5oa3BhZWh0Z3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDEwOTUsImV4cCI6MjA1ODQ3NzA5NX0.CrkZ-XZlWL3lUYBwkkrNwAU8dbCAM3mF7ouLOe2mQyI';  // 這個密鑰可以在 Supabase 項目頁面找到

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
