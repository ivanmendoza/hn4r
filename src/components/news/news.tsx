import { SchemaHackerNewsHitItem, SchemaHackerNewsResponse } from '../../schemas/hacker-news';
import useFetchContent from '../../hooks/use-fetch-content';
import { useConfigManager, useFavManager } from '../../hooks/use-storage-managers';
import TopicSelector from '../topicSelector';
// import Pagination from './pagination';
import NewsItem from './news-Item';
import { useState } from 'react';

import './news.css';

type NewsProps = {
  className?: string;
  infiniteScroll?: boolean;
};

type Topic = {
  label: string;
  value: string;
  icon?: string | null;
  selected?: boolean;
};

const topics: Array<Topic> = [
  {
    label: 'Angular',
    value: 'angular',
    icon: null,
  },
  {
    label: 'Reactjs',
    value: 'reactjs',
    icon: null,
  },
  {
    label: 'Vuejs',
    value: 'vuejs',
    icon: null,
  },
];

const News: React.FC<NewsProps> = ({ className, infiniteScroll }) => {
  const { get: readConfig, update: updateConfig } = useConfigManager();
  const configTopic = readConfig('topic');
  const savedTopic = configTopic.length > 0 ? configTopic[0].value : topics[0].value;
  const [topic, setTopic] = useState(savedTopic);
  const [page] = useState(1);

  const { content, isLoading, isError } = useFetchContent({
    endpoint: `search_by_date`,
    query: {
      query: topic,
      page: page,
    },
  });

  if (isError) return <>Error inesperado...</>;
  if (isLoading) return <>Cargando...</>;

  const news = content as SchemaHackerNewsResponse;

  // Cleaning up stories without essential information
  news.hits = news.hits?.filter(
    (hit: SchemaHackerNewsHitItem) => hit.created_at && hit.story_title && hit.story_url && hit.author
  );

  return (
    <div className="hn-news">
      <div className="hn-news-header">
        <TopicSelector
          options={topics}
          defaultValue={topic}
          onSelect={({ value }: any) => {
            updateConfig({ option: 'topic' }, { option: 'topic', value: value });
            setTopic(value);
          }}
        />
      </div>

      <div className="hn-news-content ">
        {news.hits &&
          news.hits.map((newsItem) => <NewsItem key={newsItem.objectID} {...newsItem} favHandler={useFavManager} />)}
      </div>

      {/* <div className="hn-news-footer">
            {news.nbPages && <Pagination current={news.page} total={news.nbPages} onChange={setPage} />}
          </div> */}
    </div>
  );
};

export default News;
