create table
carts (
    id uuid primary key not null default gen_random_uuid(),
    user_id uuid references users(id),
    products jsonb not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

create trigger update_carts_updated_at
before update on carts
for each row
execute function update_updated_at_column();