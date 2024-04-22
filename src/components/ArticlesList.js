import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/data/articles.json')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <ul className='list-group list-group-flush'>
                {articles.map(article => (
                    <li key={article.id} className='list-group-item'>
                        <Link to={article.url}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticlesList;