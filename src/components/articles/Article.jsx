import React from 'react'
import './article.css'

const Article = () => {
  return (
    <div className="article-section">
      <h2 className="article-header">Articles</h2>
      <div className="article-card">
        <p className="article-heading">Low Code vs Traditonal Full Stack Development</p>
        <p className="article-description">
          This article provides a insightful comparison of  the Low-code development approach of Software Development with the Traditional Full-Stack Development and uncovers the benefits of each approach over the other.
        </p>
        <a href="https://docs.google.com/document/d/1hdsS_YolHxCk33hyvo3kmb05nApSfpNkY9afywjIDhY/edit?usp=sharing" className="article-link">Check Out &rarr;</a>
      </div>
    </div>
  )
}

export default Article
