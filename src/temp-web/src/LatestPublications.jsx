import React from 'react';
import './LatestPublications.css';

const postsData = [
    {
    imageUrl: './11.jpg',
    title: 'Incredible Vegan Mac and Cheese',
    date: '02.08.2022',
    author: 'Charlie Williams',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius sequi commodi dignissimos.',
  },
  {
    imageUrl: './22.jpg',
    title: 'Creamy Kale Pasta',
    date: '02.08.2022',
    author: 'Nigula Slips',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius sequi commodi dignissimos.',
  },
  {
    imageUrl: './33.jpg',
    title: 'Tips for Planning a Menu',
    date: '02.08.2022',
    author: 'Charlie Williams',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius sequi commodi dignissimos.',
  },
  {
    imageUrl: './44.jpg',
    title: 'The Best Chicken Tinga Tacos',
    date: '02.02.2022',
    author: 'Charlie Williams',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius sequi commodi dignissimos.',
  },
  {
    imageUrl: './55.jpg',
    title: 'Join Us For Plant-Powered January!',
    date: '02.08.2022',
    author: 'Tamary French',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius sequi commodi dignissimos.',
  },
  {
    imageUrl: './66.jpg',
    title: 'Beet and Burrata Salad with Fried...',
    date: '02.02.2022',
    author: 'Prian Riverbidge',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eius sequi commodi dignissimos.',
  },
];

const LatestPublications = () => {
  return (
    <section className="publications-section">
      <div className="publications-container">
        <header className="publications-header">
          <h2 className="publications-title">Latest publications</h2>
          <p className="publications-subtitle">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>
        </header>

        <main className="publications-grid">
          {postsData.map((post) => (
            <article key={post.title} className="publication-card">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="card-image"
              />
              <h3 className="card-title">{post.title}</h3>
              <p className="card-meta">
                {post.date} | <span className="card-author">{post.author}</span>
              </p>
              <p className="card-description">{post.description}</p>
            </article>
          ))}
        </main>

        <footer className="pagination">
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
        </footer>
      </div>
    </section>
  );
};

export default LatestPublications;