alter table public.carts enable row level security;

create index "carts_user_id_index" on public.carts (user_id);

create policy "Allow public read access"
on public.carts
for select
using
( true );

create policy "Allow all access to admin and editors"
on public.carts
for all
using
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() )
with check
( public.is_admin_authenticated_user() OR public.is_editor_authenticated_user() );

