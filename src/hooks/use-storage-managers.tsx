import useLocalDb from './use-local-db';

/**
 * React hook to handle Favorite Local Storage logic (behind uses useLocalDB)
 * @kind hook
 * @returns {object} Returns the following methods: `get`, `getAll`, `add`, `remove`, `clear`, `update` and `exists`.
 */
const useFavManager = () => useLocalDb('favs', 'story_url');

/**
 * React hook to handle Configuration Local Storage logic (behind uses useLocalDB)
 * @kind hook
 * @returns {object} Returns the following methods: `get`, `getAll`, `add`, `remove`, `clear`, `update` and `exists`.
 */
const useConfigManager = () => useLocalDb('config', 'option');

export { useFavManager, useConfigManager };
