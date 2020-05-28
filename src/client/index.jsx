import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

import Tweet from './tweet.jsx'

class App extends React.Component {
  render() {
    let tweetElements = this.props.tweets.tweets.map(tweet => {
      return <Tweet tweetInfo = {tweet}/>
    })
    return (
      <div id="notimpt">
        {tweetElements}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App tweets = {tweets} />, element );//

console.log("tweet react");
