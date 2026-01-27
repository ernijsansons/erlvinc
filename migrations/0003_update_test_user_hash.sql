-- Update test user with Edge-compatible password hash
UPDATE users SET password_hash = '100000$a6fb497738549aa61b2dff0ac0b5e49b$cec020ee72a889e0475fb2ffb0ff1c8d604b989b1dfd54c191634a3b870a50d9' WHERE email = 'test@erlvinc.com';
