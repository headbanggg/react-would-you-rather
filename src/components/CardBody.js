import React from 'react'
import { dateFormat } from '../utils/_DATA'

class CardBody extends React.Component {
    render() {
        const { title, firstText, secondText, thirdText, time} = this.props
        return (
            <div className="card-body">
            <h5 className="card-title">{title} <small>{time?dateFormat(time):""}</small></h5>
            <p className="card-text">
            {firstText}</p>
            <p className="card-text">
            {secondText}</p>
            <p className="card-text">
            {thirdText}
            </p>
        </div>
        )
        }
  }

  export default CardBody 