alter table public.installations enable row level security;

create policy "Allow public read access"
on public.installations
for select
using
( true );

create policy "Allow all access to admin and editors"
on public.installations
for all
using
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() )
with check
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() );

