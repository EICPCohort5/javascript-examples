//@ts-check
import { movies } from '../../data/movies-module.js';
import BetterMemoryAdapter from './BetterMemoryAdapter.js';
import { LowSync } from '../../node_modules/lowdb/lib/LowSync.js';
import * as lodash from '../../node_modules/lodash-es/lodash.js';

let adapter = new BetterMemoryAdapter({ movies });
let db = new LowSync(adapter);
await db.read();
db.data ||= { movies };

console.log('db:', db);
console.log('Movie 1:', db.data.movies[0]);
// console.log('Movie 1:', db.chain.get('movies').find({ id: 1 }).value());

class LowSyncWithLodash extends LowSync {
  chain = lodash.chain(this).get('data');
}

let lodashDb = new LowSyncWithLodash(adapter);
await lodashDb.read();
const movie2 = lodashDb.chain.get('movies').find({ id: 2 }).value();

console.log('Movie2:', movie2);

console.log('Finished');
