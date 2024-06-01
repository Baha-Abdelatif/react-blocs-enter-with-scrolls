import React from 'react';

export default function Cardbox({ article, index }) {
  const { Title, Author, Content, Date, Link } = article;
  const alignment = index % 2 === 0 ? 'fade-right' : 'fade-left';
  return (
    <div
      className='cardBox'
      data-aos={alignment}
      data-aos-anchor-placement='center-bottom'
    >
      <div className='skewed skewed-left'>
        <div className='image'>
          <div>
            <img
              src={`https://loremflickr.com/900/500/nature?lock=${index}`}
              alt='random placeholder'
            />
          </div>
        </div>
        <div className='text'>
          <small>{Date}</small>
          <h1>
            {Title} {Author}
          </h1>
          <p>{Content}</p>
          <a href={Link} alt=''>
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
