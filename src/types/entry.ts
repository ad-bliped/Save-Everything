export type EntryCategory = 'food' | 'coffee' | 'wine' | 'whisky';

export type Entry = {
  id: string;
  category: EntryCategory;
  itemName: string;
  placeName?: string;
  tastedAt: string;
  rating: number;
  oneLineReview?: string;
  notes?: string;
  tags: string[];
  photoUris: string[];
  wouldRepeat: boolean;
  createdAt: string;
  updatedAt: string;
};
