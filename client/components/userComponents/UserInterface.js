import React from 'react';
// import List from './List';

const UserInterface = (props) => {
  return (
    <div>
      <p>Hi, {props.username}</p>
      <form>
        <input type="text" name="search" />
      </form>
      <div className="lists">
        <p>Hi, {props.username}</p>
      </div>
    </div>
  );
};

export default UserInterface;
