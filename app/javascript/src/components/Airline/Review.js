import React from 'react'

const Review = (props) => {
  console.log('%%%%%%%%%%%%%%%%%%%')
  const score = props.attributes.score
  const title = props.attributes.title
  const description = props.attributes.description
  console.log(props.attributes)

  return (
    <div>
      <div>
        <div>
          {score}
        </div>
        <div>
          {title}
        </div>
        <div>
          {description}
        </div>
      </div>
    </div>
  )
}

export default Review