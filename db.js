const fs = require('fs');
const path = require('path');

function getPath(name) {
  return path.join(__dirname, 'data', `${name}.json`);
}

function load(name) {
  const p = getPath(name);
  if (!fs.existsSync(p)) return {};
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return {}; }
}

function save(name, data) {
  fs.writeFileSync(getPath(name), JSON.stringify(data, null, 2));
}

function get(name, key) {
  return load(name)[key];
}

function set(name, key, value) {
  const db = load(name);
  db[key] = value;
  save(name, db);
}

function del(name, key) {
  const db = load(name);
  delete db[key];
  save(name, db);
}

module.exports = { load, save, get, set, del };
