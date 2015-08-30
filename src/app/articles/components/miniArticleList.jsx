/**
 * Created by Peter on 30/08/15.
 */
import React, { Component, PropTypes } from 'react';
import MiniArticle from './miniArticle.jsx';

export default class MiniArticleList extends Component {
  render() {
    return (
      <ul>
        {this.props.miniarticles.map((miniarticle, index) =>
            <MiniArticle {...miniarticle}
              key={index}
              onClick={() => this.props.onMiniArticleClick(index)} />
        )}
      </ul>
    );
  }
}

MiniArticleList.propTypes = {
  onMiniArticleClick: PropTypes.func.isRequired,
  miniarticles: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};