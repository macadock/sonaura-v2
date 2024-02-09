alter table public.products enable row level security;

create index  products_slug_index on public.categories (slug);

create policy "Allow public read access" 
on public.products 
for select 
using 
( true );

create policy "Allow all access to admin and editors" 
on public.products 
for all 
using
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() )
with check
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() );
