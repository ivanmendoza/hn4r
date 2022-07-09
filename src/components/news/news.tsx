import useFetchContent from '../../hooks/useFetchContent';
import TopicSelector from '../topicSelector';
import { SchemaHackerNewsHitItem, SchemaHackerNewsResponse } from '../../schemas/hacker-news';
import Pagination from './pagination';
import NewsItem from './news-Item';
import { useState } from 'react';

import './news.css';

type NewsProps = {
  className?: string;
  infiniteScroll?: boolean;
};

const topics = [
  {
    label: 'Angular',
    value: 'angular',
    icon: null,
    selected: true,
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
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState(topics.filter((topic: any) => topic.selected === true)[0]);

  const { content, isLoading, isError } = useFetchContent({
    endpoint: `search_by_date`,
    query: {
      query: topic.value,
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
          onSelect={(itemSelected: any) => {
            setTopic(itemSelected);
          }}
        />

        <div className="hn-news-content ">
          {news.hits && news.hits.map((newsItem) => <NewsItem key={newsItem.objectID} {...newsItem} />)}
        </div>

        {/* <div className="hn-news-footer">
          {news.nbPages && <Pagination current={news.page} total={news.nbPages} onChange={setPage} />}
        </div> */}
      </div>
    </div>
  );
};

export default News;
