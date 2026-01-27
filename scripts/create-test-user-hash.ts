// Generate password hash for test user using Edge-compatible hashing
import { hashPassword } from '../src/lib/password';

async function main() {
  const password = 'TestUser123!';
  const hash = await hashPassword(password);

  console.log('Test User Credentials:');
  console.log('Email: test@erlvinc.com');
  console.log('Password:', password);
  console.log('\nPassword Hash:');
  console.log(hash);

  console.log('\n\nSQL to update user:');
  console.log(`UPDATE users SET password_hash = '${hash}' WHERE email = 'test@erlvinc.com';`);
}

main().catch(console.error);
