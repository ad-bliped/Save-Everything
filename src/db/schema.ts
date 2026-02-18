export const CREATE_ENTRIES_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS entries (
  id TEXT PRIMARY KEY NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('food', 'coffee', 'wine', 'whisky')),
  item_name TEXT NOT NULL,
  place_name TEXT,
  tasted_at TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  one_line_review TEXT,
  notes TEXT,
  tags_json TEXT NOT NULL DEFAULT '[]',
  photo_uris_json TEXT NOT NULL DEFAULT '[]',
  would_repeat INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
`;

export const CREATE_ENTRIES_INDEX_SQL = `
CREATE INDEX IF NOT EXISTS idx_entries_category_tasted_at
ON entries(category, tasted_at DESC);
`;
