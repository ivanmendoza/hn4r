/**
 * @module News
 */

import { SchemaHackerNewsResponse } from '../../schemas/hacker-news';
import useFetchInfiniteContent from '../../hooks/use-fetch-infinite-content';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/use-on-screen';
import NewsPage from './news-page';
import NewsMessage from './news-message';

import './news.css';
import news from '.';

type NewsProps = {
  className?: string;
  topic: string;
};

/**
 * Hacker news grid
 * @kind component
 * @prop {string} - className
 * @prop {string} - topic
 * @returns {React.FC}
 */
const News: React.FC<NewsProps> = ({ topic, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [totalPages, setTotalPages] = useState(10);

  const { content, isLoading, isLoadingMore, isError, size, setSize, isFetching } = useFetchInfiniteContent({
    endpoint: `search_by_date`,
    query: {
      query: topic,
    },
  });

  const newsPages = content ? (content as Array<SchemaHackerNewsResponse>) : ([] as Array<SchemaHackerNewsResponse>);
  const isEnd = size === totalPages;

  if (content && content[0].nbPages && totalPages !== content[0].nbPages) {
    setTotalPages(content[0].nbPages);
  }

  useEffect(() => {
    if (isVisible && !isEnd && !isFetching && !isLoading && newsPages.length > 0) {
      if (size + 1 === newsPages.length + 1) {
        setSize(size + 1);
      }
    }
    // eslint-disable-next-line
  }, [isVisible]);

  return (
    <div className="hn-news">
      {(isError || (!isLoading && !isLoadingMore && newsPages.length <= 0)) && (
        <NewsMessage type="empty">
          Sorry, no content available. <br />
          Try again later.
        </NewsMessage>
      )}
      <div className="hn-news-content ">
        {newsPages.length > 0 && newsPages.map((page, index) => <NewsPage key={`page-${index}`} news={page} />)}
      </div>
      <div ref={ref}>&nbsp;</div>
      <div className="hn-news-footer">
        {(isFetching || isLoading || isLoadingMore) && (
          <NewsMessage type="loading">🕜️ Loading more, please wait...</NewsMessage>
        )}
        {isEnd && (
          <NewsMessage type="info">
            🥳 <strong>Well done! </strong>
            <br />
            There's no more stories to read. <br />
            Come back later for more.
          </NewsMessage>
        )}
      </div>
    </div>
  );
};

export default News;
