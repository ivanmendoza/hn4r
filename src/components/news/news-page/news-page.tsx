/**
 * @module NewsPage
 */
import { useFavManager } from '../../../hooks/use-storage-managers';
import { SchemaHackerNewsHitItem, SchemaHackerNewsResponse } from '../../../schemas/hacker-news';
import NewsItem from '../news-Item';

type NewsPageProps = {
  news: SchemaHackerNewsResponse;
};

/**
 * NewsPage component renders all the data from a Hacker News' API Response
 * @kind component
 * @prop {SchemaHackerNewsResponse} - news data
 * @returns {React.FC}
 */
const NewsPage: React.FC<NewsPageProps> = ({ news }) => {
  if (news.hits) {
    news.hits = news.hits.filter(
      (hit: SchemaHackerNewsHitItem) => hit.created_at && hit.story_title && hit.story_url && hit.author
    );
  }
  return (
    <>
      {news.hits.map((newsItem: SchemaHackerNewsHitItem) => (
        <NewsItem key={newsItem.objectID} {...newsItem} favHandler={useFavManager} />
      ))}
    </>
  );
};

export default NewsPage;
