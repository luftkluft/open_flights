import React, { Fragment } from "react";



const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input type="radio" value={score} onChange={()=>console.log('onChange', 'selected:', score)} name="rating" id={`rating-${score}`} />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Heve an experience with {props.attributes.name}? Share your review!</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" />
        </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" />
        </div>
        <div className="field">
          <div className="raiting-container">
            <div className="raiting-title-text">Rate This Airline</div>
            {ratingOptions}
          </div>
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm