-- Users table
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  role TEXT DEFAULT "user",
  avatar_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Sessions table (for Lucia Auth)
CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at DATETIME NOT NULL
);

-- Projects table
CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  url TEXT,
  icon TEXT,
  status TEXT DEFAULT "active",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- User projects (many-to-many)
CREATE TABLE user_projects (
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  project_id TEXT REFERENCES projects(id) ON DELETE CASCADE,
  role TEXT DEFAULT "member",
  PRIMARY KEY (user_id, project_id)
);

-- Seed initial projects
INSERT INTO projects (id, name, description, url, icon) VALUES
("nxtspin", "NxtSpin", "Laundromat equipment marketplace", "https://nxtspin.com", "🧺"),
("coreflow", "CoreFlow360", "Business operations platform", "https://coreflow360.com", "⚡"),
("priority1", "Priority1 Freight", "Freight logistics management", "https://priority1freight.com", "🚛");
