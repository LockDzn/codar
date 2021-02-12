import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

type Props = {
  feedback: {
    client: string
    company: string
    text: string
  }
}

const FeedbackCard: React.FC<Props> = ({ feedback }) => {
  return (
    <Container>
      <div className="photo"></div>
      <div className="info">
        <div className="feedback">{feedback.text}</div>
        <p className="client">{feedback.client}</p>
        <p className="company">{feedback.company}</p>
      </div>
    </Container>
  )
}

FeedbackCard.propTypes = {
  feedback: PropTypes.shape({
    client: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default FeedbackCard
