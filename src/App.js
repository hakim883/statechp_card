import './App.css';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

class state extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "hakim",
      bio: "hello",
      profession: "Full Stack web developer",
      isShown: false,
      imgSrc:'hh.jpg'
  };
  this.hideProfile = this.hideProfile.bind(this);
  }
  hideProfile() {
    this.setState(state => ({
      isShown: !state.isShown
    }));
}
render (){
  const {fullName, bio, profession, isShown, imgSrc} = this.state;
  return(
  <div className="App">
    <Button variant='dark' onClick={() => this.hideProfile()}>{this.state.isShown ? 'Hide it' : 'Show it'}</Button>
    {isShown && <div className='profile'>
            <h1 className='title'>
                {fullName}
            </h1>
            <img className='image' src={imgSrc} width='400px' height='400px' alt='avatar' style={{padding:'1% 0'}}/>
            <p className="bio">
                {bio}
            </p>
            <p className='profession'>
                {profession}
            </p>
    </div>}

  </div>
  );
}
}

export default state;
