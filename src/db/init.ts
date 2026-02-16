import * as SQLite from 'expo-sqlite';

import { CREATE_ENTRIES_INDEX_SQL, CREATE_ENTRIES_TABLE_SQL } from './schema';

const db = SQLite.openDatabaseSync('save-everything.db');

export async function initializeDatabase(): Promise<void> {
  await db.execAsync('PRAGMA journal_mode = WAL;');
  await db.execAsync(CREATE_ENTRIES_TABLE_SQL);
  await db.execAsync(CREATE_ENTRIES_INDEX_SQL);
}

export { db };
