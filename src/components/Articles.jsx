import { Link } from 'react-router-dom' // Import Link from react-router-dom
import { articlesData } from '../data'

function Articles() {
  return (
    <section id="home-articles" className="py-2">
      <div className="container">
        <h2>Editor Picks</h2>
        <div className="articles-container">
          {articlesData.map(
            ({ id, img, category, title, description, bgClass, order }) => (
              <article key={id} className={`card ${bgClass || ''}`}>
                {order.map((item) => {
                  switch (item) {
                    case 'img':
                      return <img key={item} src={img} alt={title} />
                    case 'content':
                      return (
                        <div key={item}>
                          <div
                            className={`category category-${category.toLowerCase()}`}
                          >
                            {category}
                          </div>
                          <h3>
                            <Link to="/article">{title}</Link>
                          </h3>
                          <p>{description}</p>
                        </div>
                      )
                    default:
                      return null
                  }
                })}
              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Articles
