class LocalStorageDB {
  _name: string;
  _key_field: string;

  constructor(name: string, key: string, defaultData: Array<any> = []) {
    this._name = name;
    this._key_field = key;

    if (defaultData) {
      this.add(defaultData);
    }
  }

  createDb() {
    localStorage.setItem(this._name, JSON.stringify([]));
    const db = localStorage.getItem(this._name);
    return JSON.parse(db ? db : '');
  }

  loadDb() {
    const db = localStorage.getItem(this._name);

    if (db == null) {
      return this.createDb();
    }

    return JSON.parse(db ? db : '');
  }

  public clear() {
    return this.createDb();
  }

  public get(ids: Array<string> | string, db?: Array<any>) {
    if (!(ids instanceof Array)) {
      ids = [ids];
    }

    db = db ? db : this.loadDb();

    let results: Array<any> = [];
    ids.forEach((id) => {
      let idResults = db?.filter((item: any) => item[this._key_field] === id);
      results.concat(idResults);
    });

    return results;
  }

  public exists(id: string, db?: Array<any>) {
    db = db ? db : this.loadDb();
    if (db === null || db === [null] || (db && db.length <= 0)) return false;
    let results = db?.find((item: any) => item[this._key_field] === id);
    return results !== undefined;
  }

  public add(items: Array<any> | any) {
    try {
      if (!(items instanceof Array)) {
        items = [items];
      }

      const db = this.loadDb();
      let newDb = [...db];

      items.forEach((item: any) => {
        if (!this.exists(item[this._key_field], newDb)) {
          newDb.push(item);
        }
      });

      localStorage.setItem(this._name, JSON.stringify(newDb));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public remove(ids: Array<string> | string) {
    try {
      if (!(ids instanceof Array)) {
        ids = [ids];
      }
      const db = this.loadDb();
      let newDb = [...db];

      ids.forEach((id) => {
        newDb = newDb?.filter((item: any) => item[this._key_field] !== id);
      });

      localStorage.setItem(this._name, JSON.stringify(newDb));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public update(id: string, newItem: any) {
    try {
      let db = this.loadDb();
      let index = db.findIndex((item: any) => item[this._key_field] === id);

      if (index > -1) {
        db[index] = newItem;
        localStorage.setItem(this._name, JSON.stringify(db));
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default LocalStorageDB;
