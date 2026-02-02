-- Insert the four Kickcard Academy products
-- Note: file_url will be updated after uploading files to Vercel Blob
-- Changed price_gbp to price to match actual database schema

INSERT INTO products (id, name, description, price, file_url) VALUES
(1, 'The Manual', 'Complete guide to sneaker and card reselling fundamentals', 9700, 'placeholder'),
(2, 'The Guides', 'Advanced strategies and insider techniques for maximizing profits', 19700, 'placeholder'),
(3, 'Mastery', 'Elite-level training with personal mentorship and exclusive community access', 39700, 'placeholder'),
(4, 'Lite', 'Essential starter guide to begin your reselling journey', 4900, 'placeholder')
ON CONFLICT (id) DO NOTHING;
