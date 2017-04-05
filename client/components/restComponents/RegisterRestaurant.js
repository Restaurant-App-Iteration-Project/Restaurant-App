import React from 'react';

const RegisterRestaurant = (props) => {

  return (
    <div className="container">
      <div className="form" id="RegisterRestaurant">
        <form className="login-form">
          <input id="username" type="text" placeholder="Username"></input>
          <input id="password" type="password" placeholder="Password"></input>
          <input id="rest-name" type="text" placeholder="Restaurant Name"></input>
          <input id="phoneNumber" type="phoneNumber" placeholder="Phone Number"></input>
          <input id="address" type="text" placeholder="Address"></input>
          <button onClick={() => props.handleClick('register-rest')}>Register</button>
        </form>
        <p className="message">Already registered? <a onClick={() => props.handleClick('home-page')} href="#">Log in</a></p>
      </div>
    </div>
  );

}

export default RegisterRestaurant
