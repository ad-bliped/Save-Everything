import { db } from '@/db/init';
import type { Entry } from '@/types/entry';

function toStorageJson(value: string[]): string {
  return JSON.stringify(value ?? []);
}

export async function createEntry(entry: Entry): Promise<void> {
  const sql = `
    INSERT INTO entries (
      id, category, item_name, place_name, tasted_at, rating,
      one_line_review, notes, tags_json, photo_uris_json,
      would_repeat, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  await db.runAsync(sql, [
    entry.id,
    entry.category,
    entry.itemName,
    entry.placeName ?? null,
    entry.tastedAt,
    entry.rating,
    entry.oneLineReview ?? null,
    entry.notes ?? null,
    toStorageJson(entry.tags),
    toStorageJson(entry.photoUris),
    entry.wouldRepeat ? 1 : 0,
    entry.createdAt,
    entry.updatedAt
  ]);
}
