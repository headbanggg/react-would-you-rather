import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
class Card extends React.Component {
  render() {
    const { user, divClass, title,firstText,secondText,thirdText, time  } = this.props
    return (
      <div key={user.id} className={divClass} class="container">
      <div className="card" key={user.id} >
      <CardHeader user={user}  />
      <CardBody 
       key={user.id} 
        title={title} 
        time={time}
        firstText={firstText}
        secondText={secondText} 
        thirdText={thirdText}/>
      </div>
      </div>
      )
    }
  }

  export default Card 