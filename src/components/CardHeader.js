import React from 'react'
class CardHeader extends React.Component {
  render() {
    const { user} = this.props
    return (
      <img  class="img-fluid" src={user.avatarURL?user.avatarURL :"images/defaultThumbnail.png"} className="card-img-top" alt=""/>
      )
    }
  }

  export default CardHeader 