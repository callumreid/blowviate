# Supabase Setup for Comments

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in:
   - **Name**: blowviate (or whatever you want)
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your Vercel region
5. Wait for the project to be created (~2 minutes)

## 2. Create the Comments Table

1. In your Supabase dashboard, go to the SQL Editor
2. Click "New Query"
3. Paste this SQL and click "Run":

```sql
create table comments (
  id uuid default gen_random_uuid() primary key,
  daily_date text not null,
  username text not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create an index for faster queries
create index comments_daily_date_idx on comments(daily_date);

-- Enable Row Level Security (RLS)
alter table comments enable row level security;

-- Allow anyone to read comments
create policy "Anyone can read comments"
  on comments for select
  to anon, authenticated
  using (true);

-- Allow anyone to insert comments
create policy "Anyone can insert comments"
  on comments for insert
  to anon, authenticated
  with check (true);
```

## 3. Get Your API Keys

1. In your Supabase dashboard, go to **Settings** > **API**
2. You'll see two important values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Service Role Key** (under "Project API keys" - this is secret!)

## 4. Add Environment Variables

Create a file called `.env.local` in your project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

Replace with your actual values from step 3.

## 5. Add to Vercel

In your Vercel project dashboard:

1. Go to **Settings** > **Environment Variables**
2. Add both variables:
   - `NEXT_PUBLIC_SUPABASE_URL` with your URL
   - `SUPABASE_SERVICE_ROLE_KEY` with your service role key
3. Make sure they're available for Production, Preview, and Development
4. Click "Save"

## 6. Deploy

Commit your changes and push to trigger a new deployment:

```bash
git add .
git commit -m "Add Supabase comments"
git push
```

## Done!

Your commenting system should now work in production. Users can leave comments that persist in your Supabase database.

## Troubleshooting

- **"Missing Supabase environment variables"**: Make sure `.env.local` exists locally and environment variables are set in Vercel
- **"Could not resolve host" when hitting Supabase**: Supabase project URLs use the `.supabase.co` domain. If you copied `.supabase.com`, change it to `.supabase.co` locally and in Vercel.
- **Comments not showing**: Check the Supabase Table Editor to see if comments are being saved
- **Can't post comments**: Check the Supabase Logs (in dashboard) for any errors
