/**
 * @module NewsMessage
 */
import './news-message.css';

type NewsMessageProps = {
  type: 'empty' | 'error' | 'info' | 'loading';
  children: any;
};

/**
 * NewsMessage allows to display a message box with custom style for each type.
 * @kind component
 * @prop {'empty' | 'error' | 'info' | 'loading'} - type
 * @prop {ReactNode} children
 * @returns {React.FC}
 */
const NewsMessage: React.FC<NewsMessageProps> = ({ children, type }) => {
  const typeClassName = type ? ` hn-news-message-${type}` : '';
  return <div className={`hn-news-message${typeClassName}`}>{children}</div>;
};

export default NewsMessage;
