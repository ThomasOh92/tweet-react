import React from 'react';

class Entities extends React.Component {
  render() {
    let entityInfoArray = []
    let recursiveCheck = obj => {
        for (let key in obj){
            if (typeof obj[key] === "object" && obj[key] !== null){
                recursiveCheck(obj[key])
            } else {
                entityInfoArray.push(obj[key])
            }
        }
    }
    recursiveCheck(this.props.entitiesInfo)
    
    let entityInfo = entityInfoArray.map(entities => {
        return <li>{entities}</li>
    })
    return (
      <ul>
        {entityInfo}
      </ul>
    );
  }
}


export default Entities