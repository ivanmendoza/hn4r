<a name="LocalStorageDB"></a>

## LocalStorageDB
<p>Class to use Local Storage as database.</p>

**Kind**: global class  
**Author**: <p>[ivanmendoza](https://design.ivanmendoza.net)</p>  

* [LocalStorageDB](#LocalStorageDB)
    * [new LocalStorageDB(Database, Name, Default)](#new_LocalStorageDB_new)
    * [.createDb()](#LocalStorageDB+createDb) ⇒
    * [.loadDb()](#LocalStorageDB+loadDb) ⇒
    * [.clear()](#LocalStorageDB+clear) ⇒
    * [.get(ids, [db])](#LocalStorageDB+get) ⇒
    * [.getAll()](#LocalStorageDB+getAll) ⇒
    * [.exists(id, [db])](#LocalStorageDB+exists) ⇒ <code>boolean</code>
    * [.add(items)](#LocalStorageDB+add) ⇒ <code>boolean</code>
    * [.remove(ids)](#LocalStorageDB+remove) ⇒ <code>boolean</code>
    * [.update(oldItem, newItem)](#LocalStorageDB+update) ⇒ <code>boolean</code>

<a name="new_LocalStorageDB_new"></a>

### new LocalStorageDB(Database, Name, Default)
<p>Create a LocalStorageDB</p>


| Param | Type | Description |
| --- | --- | --- |
| Database | <code>string</code> | <p>name</p> |
| Name | <code>string</code> | <p>field as Key/ID</p> |
| Default | <code>Array.&lt;any&gt;</code> | <p>data to store</p> |

<a name="LocalStorageDB+createDb"></a>

### localStorageDB.createDb() ⇒
<p>Create a database in Local Storage</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <p>data from database as Array of objects</p>  
<a name="LocalStorageDB+loadDb"></a>

### localStorageDB.loadDb() ⇒
<p>Gets all the data from a database in Local Storage. If the database doesn't exists, will be created.</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <p>data from database as Array of objects</p>  
<a name="LocalStorageDB+clear"></a>

### localStorageDB.clear() ⇒
<p>Drop all the data from the database</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <p>an empty array</p>  
<a name="LocalStorageDB+get"></a>

### localStorageDB.get(ids, [db]) ⇒
<p>Drop all the data from the database</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <p>data from database as Array of objects</p>  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>string</code> | <p>Id to search</p> |
| [db] | <code>Array.&lt;any&gt;</code> | <p>Database object to search, in order to improve performance.</p> |

<a name="LocalStorageDB+getAll"></a>

### localStorageDB.getAll() ⇒
<p>Get all the records from the database</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <p>data from database as Array of objects</p>  
<a name="LocalStorageDB+exists"></a>

### localStorageDB.exists(id, [db]) ⇒ <code>boolean</code>
<p>Check if a record exists on database</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <code>boolean</code> - <p>true if the record exists and false if doesn't.</p>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>Id to check</p> |
| [db] | <code>Array.&lt;any&gt;</code> | <p>Database object to search, in order to improve performance.</p> |

<a name="LocalStorageDB+add"></a>

### localStorageDB.add(items) ⇒ <code>boolean</code>
<p>Adds a record or records to database</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <code>boolean</code> - <p>true on success and false on error</p>  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;any&gt;</code> | <p>Data to add.</p> |

<a name="LocalStorageDB+remove"></a>

### localStorageDB.remove(ids) ⇒ <code>boolean</code>
<p>Removes a record  to database</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <code>boolean</code> - <p>true on success and false on error</p>  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>Array.&lt;any&gt;</code> | <p>Data to remove.</p> |

<a name="LocalStorageDB+update"></a>

### localStorageDB.update(oldItem, newItem) ⇒ <code>boolean</code>
<p>Updates a record from database</p>

**Kind**: instance method of [<code>LocalStorageDB</code>](#LocalStorageDB)  
**Returns**: <code>boolean</code> - <p>true on success and false on error</p>  

| Param | Type | Description |
| --- | --- | --- |
| oldItem | <code>any</code> | <p>Item to update.</p> |
| newItem | <code>any</code> | <p>New item data.</p> |

