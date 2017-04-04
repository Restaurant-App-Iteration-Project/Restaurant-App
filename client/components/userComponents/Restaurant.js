import React from 'react';

const Restaurant = (props) => {

  return (
    <img src={props.imgUrl}/>
    <p>{props.name}</p>
    <a href={props.waitUrl}>Join Waitlist</a>
  );

};

export default Restaurant;
