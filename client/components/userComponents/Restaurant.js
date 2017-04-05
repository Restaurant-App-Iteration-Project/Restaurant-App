import React from 'react';

const Restaurant = (props) => {

  return (
    <div>
      <img src={props.imgUrl}/>
      <p>{props.name}</p>
      <a href={props.waitUrl}>Join Waitlist</a>
    </div>
  );

};

export default Restaurant;
