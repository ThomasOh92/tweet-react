import React from 'react';
import User from './user.jsx';
import Entities from './entities.jsx';

class Tweet extends React.Component {
  render() {

    return (
      <div style={{border:"5px solid red"}}>
        <User userInfo = {this.props.tweetInfo.user}/>
        <Entities entitiesInfo = {this.props.tweetInfo.entities}/>
        <p>{this.props.tweetInfo.text}</p>
      </div>
    );
  }
}


export default Tweet