/**
 * Class to use Local Storage as database.
 * @author [ivanmendoza]{@link https://design.ivanmendoza.net}
 */
class LocalStorageDB {
  _name: string;
  _key_field: string;

  /**
   * Create a LocalStorageDB
   * @param {string} Database name
   * @param {string} Name field as Key/ID
   * @param {Array<any>} Default data to store
   */
  constructor(name: string, key: string, defaultData: Array<any> = []) {
    this._name = name;
    this._key_field = key;

    if (defaultData) {
      this.add(defaultData);
    }
  }

  /**
   * Create a database in Local Storage
   * @returns data from database as Array of objects
   */
  createDb(): Array<any> {
    localStorage.setItem(this._name, JSON.stringify([]));
    const db = localStorage.getItem(this._name);
    return JSON.parse(db ? db : '');
  }

  /**
   * Gets all the data from a database in Local Storage. If the database doesn't exists, will be created.
   * @returns data from database as Array of objects
   */
  loadDb(): Array<any> {
    const db = localStorage.getItem(this._name);

    if (db == null) {
      return this.createDb();
    }

    return JSON.parse(db ? db : '');
  }

  /**
   * Drop all the data from the database
   * @returns an empty array
   */
  public clear(): Array<any> {
    return this.createDb();
  }

  /**
   * Drop all the data from the database
   * @param {string} - Id to search
   * @param {Array<any>=} - Database object to search, in order to improve performance.
   * @returns data from database as Array of objects
   */
  public get(ids: Array<string> | string, db?: Array<any>): Array<any> {
    if (!(ids instanceof Array)) {
      ids = [ids];
    }

    db = db ? db : this.loadDb();

    let results: Array<any> = [];
    ids.forEach((id) => {
      let idResults = db?.filter((item: any) => item[this._key_field] === id);
      results = results.concat(idResults);
    });

    return results;
  }

  /**
   * Get all the records from the database
   * @returns data from database as Array of objects
   */
  public getAll(): Array<any> {
    return this.loadDb();
  }

  /**
   * Check if a record exists on database
   * @param {string} - Id to check
   * @param {Array<any>=} - Database object to search, in order to improve performance.
   * @returns {boolean} true if the record exists and false if doesn't.
   */
  public exists(id: string, db?: Array<any>): boolean {
    db = db ? db : this.loadDb();
    if (db === null || db === [null] || (db && db.length <= 0)) return false;
    let results = db?.find((item: any) => item[this._key_field] === id);
    return results !== undefined;
  }

  /**
   * Adds a record or records to database
   * @param {Array<any>} - Data to add.
   * @returns {boolean} true on success and false on error
   */
  public add(items: Array<any> | any): boolean {
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

  /**
   * Removes a record  to database
   * @param {Array<any>} - Data to remove.
   * @returns {boolean} true on success and false on error
   */
  public remove(ids: Array<string> | string): boolean {
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

  /**
   * Updates a record from database
   * @param {any} - Item to update.
   * @param {any} - New item data.
   * @returns {boolean} true on success and false on error
   */
  public update(oldItem: any, newItem: any): boolean {
    try {
      let db = this.loadDb();
      let index = db.findIndex((item: any) => item[this._key_field] === oldItem[this._key_field]);

      if (index > -1) {
        db[index] = newItem;
        localStorage.setItem(this._name, JSON.stringify(db));
        return true;
      }

      return this.add(newItem);
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export default LocalStorageDB;
