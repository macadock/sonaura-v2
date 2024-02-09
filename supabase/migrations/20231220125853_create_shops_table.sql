create table
shops (
    id uuid primary key not null default gen_random_uuid(),
    city text not null,
    country text not null,
    address text not null,
    postal_code text not null,
    phone text not null,
    google_maps_url text not null,
    email text not null,
    open_hours jsonb not null,
    icon jsonb not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

create trigger update_shops_updated_at
before update on shops
for each row
execute function update_updated_at_column();
