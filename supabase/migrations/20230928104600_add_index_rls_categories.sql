alter table public.categories enable row level security;

create index  categories_slug_index on public.categories (slug);

create policy "Allow public read access" 
on public.categories 
for select 
using 
( true );

create policy "Allow all access to admin and editors" 
on public.categories 
for all 
using
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() )
with check
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() );
