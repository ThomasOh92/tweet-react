import React from 'react';

class User extends React.Component {
  render() {

    return (
      <div>
        <p>{this.props.userInfo.screen_name}</p>
      </div>
    );
  }
}


export default User