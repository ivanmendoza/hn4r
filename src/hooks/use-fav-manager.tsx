import LocalStorageDB from '../helpers/local-storage-manager';

const favDatabase = new LocalStorageDB('favs', 'story_url');

type storyFav = {
  story_url: string;
  story_title: string;
  author?: string;
  created_at?: string;
};

const read = (urls: Array<string> | string) => {
  return favDatabase.get(urls);
};
const create = (fav: storyFav) => {
  return favDatabase.add(fav);
};
const del = (url: string) => {
  return favDatabase.remove(url);
};
const update = (old: storyFav, newFav: storyFav) => {
  return favDatabase.update(old.story_url, newFav);
};
const is = (url: string) => {
  return favDatabase.exists(url);
};

const useFavManager = () => ({ create, read, update, del, is });

export default useFavManager;
