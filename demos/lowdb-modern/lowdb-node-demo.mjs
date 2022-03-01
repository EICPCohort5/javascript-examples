import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, '../../data/movies.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { movies: [] };
console.log('db:', db);
console.log('Movie 1:', db.data.movies[0]);
