import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {

    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={this.handleClick}>Delete</button>
        </li>
      </div>
    );
  }
  };

export default Review;
