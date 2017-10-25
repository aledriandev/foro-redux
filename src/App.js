import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({comments}) => {
  return(
    <div className='text-center container-fluid bg-blue big-font'>
      <div className='container'>
        <div className="bg-light-blue">
          <form>
          <h3> NEW COMMENT </h3>
            <input type="text" name="name" placeholder="Add name"/><br/>
            <input type="text" name="comment" placeholder="Add comments"/><br/>
            <button type="submit" name="submit" value="submit">POST COMMENT</button>
          </form>
        </div>
        <div>
          <h4>COMMENTS</h4>
          <p className="contador">{comments.length} Comments:</p>
          <ul></ul>
        </div>
      </div>
    </div>
    );
}

export default App;
