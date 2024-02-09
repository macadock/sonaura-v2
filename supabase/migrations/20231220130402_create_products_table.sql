create table
products (
    id uuid primary key not null default gen_random_uuid(),
    name text not null,
    description text not null,
    slug text not null UNIQUE,
    from_price integer,
    price integer,
    quantity integer not null default 0,
    variants jsonb,
    main_image jsonb not null,
    variants_images jsonb,
    featured boolean not null default false,
    category_id uuid references categories(id) not null,
    shop_id uuid references shops(id) not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

create trigger update_products_updated_at
before update on products
for each row
execute function update_updated_at_column();
