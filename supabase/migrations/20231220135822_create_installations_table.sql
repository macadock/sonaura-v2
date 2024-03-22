create table
installations (
    id uuid primary key not null default gen_random_uuid(),
    title text not null,
    description text not null,
    image jsonb not null,
    product_id uuid references products(id),
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

create trigger update_installations_updated_at
before update on installations
for each row
execute function update_updated_at_column();