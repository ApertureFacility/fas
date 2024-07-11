import React, { useEffect, useState } from 'react';
import { INews } from '../../interfaces/INews';
import { loadNews } from '../../dbRequests/tiresRequests';
import './allnews.css';

const NewsList: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await loadNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="news-list__loading">Loading...</div>;
  }

  return (
    <div className="news-list">
      <h1 className="news-list__title">Latest News</h1>
      {news.length > 0 ? (
        <ul className="news-list__items">
          {news.map((item) => (
            <li key={item.id} className="news-list__item">
              <h2 className="news-list__item-title">{item.title}</h2>
              <p className="news-list__item-description">{item.description}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-list__item-link"
                >
                  Read more
                </a>
              )}
              <p className="news-list__item-date">
                <small>{new Date(item.createdDate).toLocaleDateString()}</small>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="news-list__no-news">No news available.</p>
      )}
    </div>
  );
};

export default NewsList;
