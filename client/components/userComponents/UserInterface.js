import React from 'react';
import List from './List';

const UserInterface = (props) => {
  return (
    <form action="/server.js">
      <input type="text" name="search" value="Search Restaurants" />
    </form>
    // if search results, then render List
    <div className="lists">
      <List type={props.searchResults} />
      <List type={props.favorites} />
    </div>
  );
};

export default UserInterface;
