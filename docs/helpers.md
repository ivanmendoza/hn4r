## Functions

<dl>
<dt><a href="#queryBuilder">queryBuilder(props)</a> ⇒ <code>string</code></dt>
<dd><p>Builds the URL to request data to the API.</p></dd>
<dt><a href="#getKey">getKey(pageIndex, previousData)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>Return a unique key to use with useSWRInfinite</p></dd>
<dt><a href="#fetcher">fetcher(url)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd><p>To fetch content from web. Is used by SWR hooks.</p></dd>
</dl>

<a name="queryBuilder"></a>

## queryBuilder(props) ⇒ <code>string</code>
<p>Builds the URL to request data to the API.</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>FetchContentProps</code> | 

<a name="getKey"></a>

## getKey(pageIndex, previousData) ⇒ <code>string</code> \| <code>null</code>
<p>Return a unique key to use with useSWRInfinite</p>

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - <p>key</p>  

| Param | Type |
| --- | --- |
| pageIndex | <code>number</code> | 
| previousData | <code>any</code> \| <code>null</code> | 

<a name="fetcher"></a>

## fetcher(url) ⇒ <code>Promise.&lt;any&gt;</code>
<p>To fetch content from web. Is used by SWR hooks.</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

