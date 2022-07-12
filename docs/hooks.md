<a name="useFetchContent"></a>

## useFetchContent ⇒ <code>object</code>
<p>React hook to fetching content</p>

**Kind**: global hook  
**Returns**: <code>object</code> - <p>}</p>  
**Properties**

| Name | Type |
| --- | --- |
| endpoint | <code>string</code> | 
| query | <code>any</code> | 
| previousData | <code>any</code> \| <code>null</code> | 

<a name="useFetchInfiniteContent"></a>

## useFetchInfiniteContent ⇒ <code>object</code>
<p>React hook to handle fetch content for &quot;infinite loadings&quot;.</p>

**Kind**: global hook  
**Properties**

| Name | Type |
| --- | --- |
| endpoint | <code>string</code> | 
| query | <code>any</code> | 
| previousData | <code>any</code> \| <code>null</code> | 

<a name="useLocalDb"></a>

## useLocalDb ⇒ <code>object</code>
<p>React hook as a wrapper for <code>LocalStorageDB</code> methods. Returns the following methods: <code>get</code>, <code>getAll</code>, <code>add</code>, <code>remove</code>, <code>clear</code>, <code>update</code> and <code>exists</code>.</p>

**Kind**: global hook  

| Type | Description |
| --- | --- |
| <code>string</code> | <p>Database name.</p> |
| <code>string</code> | <p>Key field to uses as ID.</p> |

<a name="useOnScreen"></a>

## useOnScreen ⇒ <code>object</code>
<p>React hook to &quot;spy&quot; an HTML element and detects when appears on screen.</p>

**Kind**: global hook  
**Licence**: mit  
**Author**: <p>[ramyarey](https://github.com/ramyareye) at [SWR examples](https://github.com/vercel/swr/blob/main/examples/infinite-scroll/hooks/useOnScreen.js)</p>  

| Param | Type | Description |
| --- | --- | --- |
| ref | <code>any</code> \| <code>null</code> | <p>HTML Element Ref</p> |

<a name="useFavManager"></a>

## useFavManager ⇒ <code>object</code>
<p>React hook to handle Favorite Local Storage logic (behind uses useLocalDB)</p>

**Kind**: global hook  
**Returns**: <code>object</code> - <p>Returns the following methods: <code>get</code>, <code>getAll</code>, <code>add</code>, <code>remove</code>, <code>clear</code>, <code>update</code> and <code>exists</code>.</p>  
<a name="useConfigManager"></a>

## useConfigManager ⇒ <code>object</code>
<p>React hook to handle Configuration Local Storage logic (behind uses useLocalDB)</p>

**Kind**: global hook  
**Returns**: <code>object</code> - <p>Returns the following methods: <code>get</code>, <code>getAll</code>, <code>add</code>, <code>remove</code>, <code>clear</code>, <code>update</code> and <code>exists</code>.</p>  
