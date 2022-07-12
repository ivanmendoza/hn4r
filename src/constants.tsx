import { Topic } from './components/topicSelector';

/**
 * @module constants
 */

/**
 * Default options for `TopicSelector` component: Angular, ReactJS and VueJS.
 */
const DEFAULT_TOPICS: Array<Topic> = [
  {
    label: 'Angular',
    value: 'angular',
    icon: 'logo-angular',
  },
  {
    label: 'Reactjs',
    value: 'reactjs',
    icon: 'logo-react',
  },
  {
    label: 'Vuejs',
    value: 'vuejs',
    icon: 'logo-vuejs',
  },
];

/**
 * Hacker News API endpoint
 */
const HN_API: string = 'https://hn.algolia.com/api/v1/';

export { HN_API, DEFAULT_TOPICS };
