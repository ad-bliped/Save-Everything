import type { Entry } from '@/types/entry';

const entries: Entry[] = [];

/**
 * Temporary in-memory repository.
 *
 * This keeps the app code path functional while sqlite dependency issues
 * are being resolved in affected Windows setups.
 */
export async function createEntry(entry: Entry): Promise<void> {
  entries.push(entry);
}

export async function listEntries(): Promise<Entry[]> {
  return [...entries];
}
