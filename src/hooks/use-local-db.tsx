import LocalStorageDB from '../helpers/local-storage-manager';

const get = (db: LocalStorageDB, ids: Array<string> | string) => {
  return db.get(ids);
};

const getAll = (db: LocalStorageDB) => {
  return db.getAll();
};

const add = (db: LocalStorageDB, item: any) => {
  return db.add(item);
};

const remove = (db: LocalStorageDB, id: string) => {
  return db.remove(id);
};

const clear = (db: LocalStorageDB) => {
  return db.clear();
};

const update = (db: LocalStorageDB, oldItem: any, newItem: any) => {
  return db.update(oldItem, newItem);
};

const exists = (db: LocalStorageDB, id: string) => {
  return db.exists(id);
};

const useLocalDb = (database: string, keyField: string) => {
  const db = new LocalStorageDB(database, keyField);

  return {
    get: (ids: Array<string> | string) => get(db, ids),
    getAll: () => getAll(db),
    add: (item: any) => add(db, item),
    remove: (id: string) => remove(db, id),
    clear: () => clear(db),
    update: (oldItem: any, newItem: any) => update(db, oldItem, newItem),
    exists: (id: string) => exists(db, id),
  };
};

export default useLocalDb;
