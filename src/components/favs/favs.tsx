/**
 * @module Favs
 */

import { useFavManager } from '../../hooks/use-storage-managers';
import NewsItem from '../news/news-Item';
import './favs.css';

/**
 * Favs component to show all the stories marked as Favorites
 * @kind component
 * @returns {React.FC}
 */
const Favs: React.FC = () => {
  const { getAll: getFavs } = useFavManager();
  const news = getFavs();

  return (
    <div className="hn-favs">
      <div className="hn-favs-content ">
        {news &&
          news.length > 0 &&
          news.map((newsItem: any, index: number) => (
            <NewsItem key={`story-fav-${index}`} {...newsItem} favHandler={useFavManager} />
          ))}
      </div>
    </div>
  );
};

export default Favs;
