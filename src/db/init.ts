/**
 * Temporary no-op database bootstrap.
 *
 * NOTE:
 * Some Windows environments currently fail to resolve expo-sqlite module files
 * (ERR_MODULE_NOT_FOUND for build/SQLiteDatabase).
 * To keep the starter app runnable, DB init is intentionally a no-op for now.
 */
export async function initializeDatabase(): Promise<void> {
  // no-op
}
