-- Seed test user
-- Email: test@erlvinc.com
-- Password: TestUser123!
-- Password hash generated with Argon2id (memoryCost: 19456, timeCost: 2, outputLen: 32, parallelism: 1)

INSERT INTO users (id, email, password_hash, name, role, created_at, updated_at) VALUES
('test_user_001', 'test@erlvinc.com', '$argon2id$v=19$m=19456,t=2,p=1$45+36+NlT8JdK9cjg3rCCg$H5XL7pBxqPo/CQI99SN0Lb+JPlnzoODxT50mtn2bjTg', 'Test User', 'admin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
