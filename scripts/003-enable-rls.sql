-- Enable Row Level Security on all tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- Products table: Allow public read access (so checkout can query products)
CREATE POLICY "Allow public read access to products"
ON public.products
FOR SELECT
TO public
USING (true);

-- Orders table: Allow authenticated users to insert their own orders
CREATE POLICY "Allow insert orders"
ON public.orders
FOR INSERT
TO public
WITH CHECK (true);

-- Orders table: Allow users to read their own orders
CREATE POLICY "Allow read own orders"
ON public.orders
FOR SELECT
TO public
USING (true);

-- Customers table: Allow insert for new customers
CREATE POLICY "Allow insert customers"
ON public.customers
FOR INSERT
TO public
WITH CHECK (true);

-- Customers table: Allow users to read customer data
CREATE POLICY "Allow read customers"
ON public.customers
FOR SELECT
TO public
USING (true);
