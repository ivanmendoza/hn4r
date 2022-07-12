/**
 * @module NewsItem
 */

import { useState } from 'react';
import { SchemaHackerNewsHitItem } from '../../../schemas/hacker-news';
import Icon from '../../icon';
import ago from 's-ago';
import './news-item.css';

type NewsItemProps = SchemaHackerNewsHitItem & {
  className?: string;
  favHandler?: any;
};

/**
 * NewsItem render all the style and logic for a Hacker News Story
 * @kind component
 * @prop {string} - className
 * @prop {*} favHandler, to handle all the actions when Favorite icon is pressed.
 * @returns {React.FC}
 */
const NewsItem: React.FC<NewsItemProps> = ({ className, story_title, story_url, created_at, author, favHandler }) => {
  const { exists: isFav, add: saveFav, remove: removeFav } = favHandler();
  const [fav, setFav] = useState(isFav(story_url));
  const relativeDate = ago(new Date(created_at ? created_at : ''));

  return (
    <div className={`hn-news-item ${className ? className : ''}`}>
      <a className="hn-news-item-content" target="blank" href={story_url}>
        {relativeDate && (
          <div className="hn-news-item-metadata">
            <div className="hn-news-item-date">
              <Icon name="clock" size="16" /> {relativeDate}
            </div>
            &nbsp;
            {author && <div className="hn-news-item-author"> by {author}</div>}
          </div>
        )}
        <div className="hn-news-item-main">
          <h3 className="hn-news-item-title">{story_title}</h3>
        </div>
      </a>
      {favHandler && (
        <div
          className="hn-news-item-status hn-news-item-favorite off"
          onClick={(e) => {
            let result;
            if (fav) {
              result = !removeFav(story_url);
            } else {
              result = saveFav({ story_title, story_url, created_at, author });
            }
            setFav(result);
          }}
        >
          <Icon name={`favorite-${fav ? 'on' : 'off'}`} size="24" />
        </div>
      )}
    </div>
  );
};

export default NewsItem;
