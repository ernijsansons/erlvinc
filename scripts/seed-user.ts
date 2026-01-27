// Script to seed a test user with proper Argon2 hash
import { hash } from '@node-rs/argon2';

async function generateHash() {
  const password = 'TestUser123!';

  const passwordHash = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1
  });

  console.log('Password:', password);
  console.log('Hash:', passwordHash);
  console.log('\nSQL to insert user:');
  console.log(`INSERT INTO users (id, email, password_hash, name, role, created_at, updated_at) VALUES
('test_user_001', 'test@erlvinc.com', '${passwordHash}', 'Test User', 'admin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`);
}

generateHash();
