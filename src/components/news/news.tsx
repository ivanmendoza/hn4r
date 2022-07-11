import { SchemaHackerNewsResponse } from '../../schemas/hacker-news';
import { useFetchInfiniteContent } from '../../hooks/use-fetch-content';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import NewsPage from './news-page';
import NewsMessage from './news-message';

import './news.css';

type NewsProps = {
  className?: string;
  topic: string;
};

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

  const isEnd = size === totalPages;

  useEffect(() => {
    if (isVisible && !isEnd && !isFetching) {
      if (content && content[0].nbPages && totalPages !== content[0].nbPages) {
        setTotalPages(content[0].nbPages);
      }
      setSize(size + 1);
    }
    // eslint-disable-next-line
  }, [isVisible, isFetching]);

  const newsPages = content ? (content as Array<SchemaHackerNewsResponse>) : ([] as Array<SchemaHackerNewsResponse>);

  return (
    <div className="hn-news">
      {!isLoading && !isLoadingMore && newsPages.length <= 0 && (
        <NewsMessage type="empty">
          Sorry, no content available. <br />
          Try again later.
        </NewsMessage>
      )}
      {isError && (
        <NewsMessage type="empty">
          Sorry, no content available. <br />
          Try again later.
        </NewsMessage>
      )}
      <div className="hn-news-content ">
        {newsPages.length > 0 && newsPages.map((page, index) => <NewsPage key={`page-${index}`} news={page} />)}
      </div>
      <div ref={ref} className="hn-news-footer">
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
