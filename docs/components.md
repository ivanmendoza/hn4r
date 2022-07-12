## Modules

<dl>
<dt><a href="#module_Container">Container</a></dt>
<dd></dd>
<dt><a href="#module_Spacer">Spacer</a></dt>
<dd></dd>
<dt><a href="#module_Favs">Favs</a></dt>
<dd></dd>
<dt><a href="#module_Header">Header</a></dt>
<dd></dd>
<dt><a href="#module_Icon">Icon</a></dt>
<dd></dd>
<dt><a href="#module_NewsItem">NewsItem</a></dt>
<dd></dd>
<dt><a href="#module_NewsMessage">NewsMessage</a></dt>
<dd></dd>
<dt><a href="#module_NewsPage">NewsPage</a></dt>
<dd></dd>
<dt><a href="#module_News">News</a></dt>
<dd></dd>
<dt><a href="#module_Switch">Switch</a></dt>
<dd></dd>
<dt><a href="#module_TopicSelector">TopicSelector</a></dt>
<dd></dd>
</dl>

<a name="module_Container"></a>

## Container
<a name="module_Container..Container"></a>

### Container~Container() ⇒ <code>React.FC</code>
<p>Container to set a max-width for main content.</p>

**Kind**: inner method of [<code>Container</code>](#module_Container)  
**Properties**

| Type | Description |
| --- | --- |
| <code>ReactNode</code> | <p>children</p> |
| <code>string</code> | <p>className</p> |

<a name="module_Spacer"></a>

## Spacer
<a name="module_Spacer..Spacer"></a>

### Spacer~Spacer() ⇒ <code>React.FC</code>
<p>Container to set styles for specific type of content as filters and toolbars</p>

**Kind**: inner method of [<code>Spacer</code>](#module_Spacer)  
**Properties**

| Type | Description |
| --- | --- |
| <code>ReactNode</code> | <p>children</p> |
| <code>string</code> | <p>className</p> |
| <code>&#x27;toolbar&#x27;</code> \| <code>&#x27;filters&#x27;</code> | <p>type.</p> |

**Example**  
```js
<Spacer type="filters"></Spacer>
```
<a name="module_Favs"></a>

## Favs
<a name="module_Favs..Favs"></a>

### Favs~Favs ⇒ <code>React.FC</code>
<p>Favs component to show all the stories marked as Favorites</p>

**Kind**: inner component of [<code>Favs</code>](#module_Favs)  
<a name="module_Header"></a>

## Header
<a name="module_Header..Header"></a>

### Header~Header ⇒ <code>React.FC</code>
<p>Header component with custom brand support</p>

**Kind**: inner component of [<code>Header</code>](#module_Header)  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | <p>logo url</p> |
| <code>string</code> | <p>logo alternative text</p> |
| <code>string</code> | <p>className</p> |

<a name="module_Icon"></a>

## Icon
<a name="module_Icon..Icon"></a>

### Icon~Icon ⇒ <code>React.FC</code>
<p>Icon library</p>

**Kind**: inner component of [<code>Icon</code>](#module_Icon)  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | <p>className</p> |
| <code>string</code> | <p>name</p> |
| <code>&#x27;12&#x27;</code> \| <code>&#x27;16&#x27;</code> \| <code>&#x27;24&#x27;</code> \| <code>&#x27;32&#x27;</code> \| <code>&#x27;48&#x27;</code> \| <code>&#x27;64&#x27;</code> \| <code>&#x27;72&#x27;</code> \| <code>&#x27;96&#x27;</code> \| <code>&#x27;128&#x27;</code> | <p>size</p> |

<a name="module_NewsItem"></a>

## NewsItem
<a name="module_NewsItem..NewsItem"></a>

### NewsItem~NewsItem ⇒ <code>React.FC</code>
<p>NewsItem render all the style and logic for a Hacker News Story</p>

**Kind**: inner component of [<code>NewsItem</code>](#module_NewsItem)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
|  | <code>string</code> | <p>className</p> |
| favHandler, | <code>\*</code> | <p>to handle all the actions when Favorite icon is pressed.</p> |

<a name="module_NewsMessage"></a>

## NewsMessage
<a name="module_NewsMessage..NewsMessage"></a>

### NewsMessage~NewsMessage ⇒ <code>React.FC</code>
<p>NewsMessage allows to display a message box with custom style for each type.</p>

**Kind**: inner component of [<code>NewsMessage</code>](#module_NewsMessage)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
|  | <code>&#x27;empty&#x27;</code> \| <code>&#x27;error&#x27;</code> \| <code>&#x27;info&#x27;</code> \| <code>&#x27;loading&#x27;</code> | <p>type</p> |
| children | <code>ReactNode</code> |  |

<a name="module_NewsPage"></a>

## NewsPage
<a name="module_NewsPage..NewsPage"></a>

### NewsPage~NewsPage ⇒ <code>React.FC</code>
<p>NewsPage component renders all the data from a Hacker News' API Response</p>

**Kind**: inner component of [<code>NewsPage</code>](#module_NewsPage)  
**Properties**

| Type | Description |
| --- | --- |
| <code>SchemaHackerNewsResponse</code> | <p>news data</p> |

<a name="module_News"></a>

## News
<a name="module_News..News"></a>

### News~News ⇒ <code>React.FC</code>
<p>Hacker news grid</p>

**Kind**: inner component of [<code>News</code>](#module_News)  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | <p>className</p> |
| <code>string</code> | <p>topic</p> |

<a name="module_Switch"></a>

## Switch
<a name="module_Switch..Switch"></a>

### Switch~Switch ⇒ <code>React.FC</code>
<p>Switch component. Allows to link a different routes.</p>

**Kind**: inner component of [<code>Switch</code>](#module_Switch)  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | <p>className</p> |
| <code>Array.&lt;SwitchOption&gt;</code> | <p>options</p> |

<a name="module_TopicSelector"></a>

## TopicSelector
<a name="module_TopicSelector..TopicSelector"></a>

### TopicSelector~TopicSelector ⇒ <code>React.FC</code>
<p>Custom dropdown list. Support custom icons.</p>

**Kind**: inner component of [<code>TopicSelector</code>](#module_TopicSelector)  
**Properties**

| Type | Description |
| --- | --- |
| <code>string</code> | <p>className</p> |
| <code>string</code> | <p>defaultValue</p> |
| <code>Array.&lt;Topic&gt;</code> | <p>options</p> |
| <code>function</code> | <p>onSelect</p> |

