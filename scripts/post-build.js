// Post-build script to add wrangler.toml to _worker.js directory
const fs = require('fs');
const path = require('path');

const workerDir = path.join(__dirname, '..', '.vercel', 'output', 'static', '_worker.js');
const wranglerTomlPath = path.join(workerDir, 'wrangler.toml');

const wranglerConfig = `compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

[[d1_databases]]
binding = "DB"
database_name = "erlvinc-db"
database_id = "432a1604-4c10-4c0d-9158-4a9052d29d92"
`;

// Ensure the directory exists
if (!fs.existsSync(workerDir)) {
  console.error('Error: _worker.js directory not found');
  process.exit(1);
}

// Write wrangler.toml
fs.writeFileSync(wranglerTomlPath, wranglerConfig, 'utf8');
console.log('✅ Added wrangler.toml to _worker.js directory');
