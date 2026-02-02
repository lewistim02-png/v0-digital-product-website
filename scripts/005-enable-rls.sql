-- Enable Row Level Security on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products for checkout
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO public
  USING (true);

-- Allow public insert for orders during checkout
CREATE POLICY "Allow public checkout order creation"
  ON orders FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public read of orders by session ID for webhooks
CREATE POLICY "Anyone can read orders"
  ON orders FOR SELECT
  TO public
  USING (true);

-- Allow public insert for customers during checkout
CREATE POLICY "Allow public customer creation"
  ON customers FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public read of customers for order processing
CREATE POLICY "Anyone can read customers"
  ON customers FOR SELECT
  TO public
  USING (true);

-- Allow service role full access for webhooks and admin
CREATE POLICY "Service role has full access to orders"
  ON orders FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role has full access to customers"
  ON customers FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
