
# HN4Reign - Changelog

## v0.7.0 - 2022-07-11

* ✨ New: Topic selector built from scratch to match styles with original design.
* 👨‍💻 Development: MomentJs replaced by s-ago library to reduce weight.

## v0.6.1 - 2022-07-10
* 🛠️ Fix: Images for app icons (PWA) moved `public/icons` to match with manifest.json and index.html configuration.  

## v0.6.0 - 2022-07-10
* ✨ New: Infinite scroll added to News page. 
* ✨ New: `NewsPage` and `NewsMessage` components created in order to improve code and styles for `News` component.  
* 🔧 Improvement: A `type` prop added to `Spacer` component, to handle more than one style (for filters and toolbars).
* 🔧 Improvement: `TopicSelector` moved from News component to home page.
* 🚮 public/icons.png image removed.
* 👨‍💻 Development: `useFetchInfiniteContent` hook created to handle infinite scroll feature. Also was added a query builder and a `getKey` methods.
* 👨‍💻 Development: `useOnScreen` hook added, to handle scroll events. Thanks to ramyareye.
* 👨‍💻 Deprecated: `useFetchFakeContent` hook.

## v0.5.0 - 2022-07-09
* ✨ New: My faves page is ready! 
* ✨ New: Filter preference for topic is persistent.
* 🔧 Improvement: TopicSelector now support set a default value using `defaultValue` prop.
* 🔧 Improvement: `update` method from LocalStorageManager adds the item if isn't exists.
* 🛠️ Fix: Solved a critical error with `get` method from LocalStorageManager, where's no data is returned even when the data exists at Local Storage.
* 👨‍💻 Development: `useLocalDb` hook was created to abstract the local storage management as database. The hooks `useFavManager` and `useConfigManager` implements the feature.
## v0.4.1 - 2022-07-09
* ✨ New: Class LocalStorageManager created to handle persistent information.
* ✨ New: useFavManager created to handle favorite's common actions, as create, read, update, delete and check if exists.
* ✨ New: Changelog added. ;)
* 🔧 Improvement: Components fits better on mobile screens.
* 👨‍💻 Development: useFetchFakeContent added to simulate fake (local) data and avoid API limits. 

## v0.4.0 - 2022-07-09
* First functional version:Shows news from Hacker News and allows to change the search between three main topics (Angular, ReactJS, VueJS).
* ✨ New: Ready to use mobile, desktop and large desktop.
* ✨ New: Ready to install on mobile home screens as PWA.