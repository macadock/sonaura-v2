create table
categories (
    id uuid primary key not null default gen_random_uuid(),
    name text not null,
    slug text not null UNIQUE,
    icon jsonb not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

create trigger update_categories_updated_at
before update on categories
for each row
execute function update_updated_at_column();