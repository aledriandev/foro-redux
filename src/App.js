import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Row} from 'react-bootstrap'
const App = ({comments}) => {
  const commentsUsers = comments.map((commentUser, index)=>{
    return (
      <li key={index}>
        <Row>
          <Col md={2}>
            <img className='avatar' src={commentUser.avatar}/>
          </Col>
          <Col md={10}>
            <p className='mg-0'><b>{commentUser.name}</b></p>
            <hr className='bar'/>
            <p>{commentUser.comment}</p>
          </Col>
        </Row>
      </li>
    );
  });
  return(
    <div className='container-fluid bg-blue big-font'>
      <div className='container-group'>
        <div className="bg-light-blue content-form">
          <form onSubmit={(e)=> e.preventDefault()}>
          <h3 className='text-left c-blue'> NEW COMMENT </h3>
            <input type="text" name="name" placeholder="Add name"/><br/>
            <input type="text" name="comment" placeholder="Add comments"/><br/>
            <button className='btn bg-light-yellow c-blue' type="submit" name="submit" value="submit"><b>POST COMMENT</b></button>
          </form>
        </div>
        <div>
          <h4>COMMENTS</h4>
          <p className="contador">{comments.length} Comments:</p>
          <ul>{commentsUsers}</ul>
        </div>
      </div>
    </div>
    );
}

export default App;
