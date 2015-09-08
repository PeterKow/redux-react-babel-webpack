/**
 * Created by Peter on 30/08/15.
 */
import React, { Component, PropTypes } from 'react';
import MiniArticle from './miniArticle.jsx';

export default class MiniArticleList extends Component {
  render() {
    return (
      <ul style={{WebkitPaddingStart: '0em'}}>
          {this.props.miniarticles.map((miniArticle, index) =>
              <MiniArticle {...miniArticle}
                key={index}
                onClick={() => this.props.onMiniArticleClick(miniArticle.id)} />
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