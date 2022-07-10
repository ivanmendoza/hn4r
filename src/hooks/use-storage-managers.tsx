import useLocalDb from './use-local-db';

const useFavManager = () => useLocalDb('favs', 'story_url');
const useConfigManager = () => useLocalDb('config', 'option');

export { useFavManager, useConfigManager };
