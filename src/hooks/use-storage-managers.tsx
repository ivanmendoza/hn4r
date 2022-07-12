import useLocalDb from './use-local-db';

const /**
   * React hook to handle Favorite Local Storage logic (behind uses useLocalDB)
   * @kind hook
   * @returns {object} Returns the following methods: `get`, `getAll`, `add`, `remove`, `clear`, `update` and `exists`.
   */
  useFavManager = () => useLocalDb('favs', 'story_url');

const /**
   * React hook to handle Configuration Local Storage logic (behind uses useLocalDB)
   * @kind hook
   * @returns {object} Returns the following methods: `get`, `getAll`, `add`, `remove`, `clear`, `update` and `exists`.
   */
  useConfigManager = () => useLocalDb('config', 'option');

export { useFavManager, useConfigManager };
