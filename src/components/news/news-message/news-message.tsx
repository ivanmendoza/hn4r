import './news-message.css';

type NewsMessageProps = {
  type: 'empty' | 'error' | 'info' | 'loading';
  children: any;
};

const NewsMessage: React.FC<NewsMessageProps> = ({ children, type }) => {
  const typeClassName = type ? ` hn-news-message-${type}` : '';
  return <div className={`hn-news-message${typeClassName}`}>{children}</div>;
};

export default NewsMessage;
