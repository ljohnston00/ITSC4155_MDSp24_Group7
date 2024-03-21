import React from 'react';

function NewsCard({ news }) {
    return (
      <div className='newsCard'>
        <h2>{news.title}</h2>
        <img className='newsImage' src={news.image_url} alt={news.title}/>
        <p>{news.description}</p>
        <a href={news.url}>Read more</a>
      </div>
    );
  }
  
  export default NewsCard;