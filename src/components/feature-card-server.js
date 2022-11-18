import React from 'react'

import PropTypes from 'prop-types'

import './feature-card-server.css'

const FeatureCardServer = (props) => {
  return (
    <div className={`feature-card-server-feature-card ${props.rootClassName} `}>
      <img
        alt="Database"
        src={props.image_src1}
        className="feature-card-server-image"
      />
      <h2 className="feature-card-server-text">{props.title}</h2>
      <span className="feature-card-server-text1">{props.description}</span>
    </div>
  )
}

FeatureCardServer.defaultProps = {
  rootClassName: '',
  image_src1: '/playground_assets/2_1-200h.png',
  title: 'Servers',
  description:
    'SQL database is a collection of highly structured tables containing rows that reflect a data entity and columns that define a specific information field. Relational databases are built using the structured query language to create, store, update, and retrieve data. We aim to use the relational database management systems (RDBMS) such as MySQL, Oracle, and PostgreSQL in our software development services.',
}

FeatureCardServer.propTypes = {
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCardServer
