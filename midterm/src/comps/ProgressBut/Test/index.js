import React, { Component } from 'react';
// import firebase from 'firebase';
// import { firebaseConfig } from './connection';

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let messageRef = firebase.database().ref('messages');

class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
      list: [],
      font: "black",
      color: "blue"
    }
  }

//   onChange = () => {
//     if (this.state.color == 'blue'){
//       this.setState({ color: 'green' });
//     }
//     else {
//       this.setState({ color: 'blue' });
//     }
//  }

 onChange = () => {
  var left = document.querySelectorAll(".left");
  if (this.state.color === 'green'){
    this.setState({ color: 'grey' });
  }
  else {
    this.setState({ color: 'green' });
  }
}

  render() {
    return <div className='container'>

      {/* messages will be listed here */}
      <div className='messagesDiv' id='messagesDivId'>
        <ul>
          {/* List array is mapped through*/}
          {this.state.list.map(item => {
            return (
              <li className={(item.name === this.state.name ? 'right' : 'left')}
              style={{ color: this.state.font }}
                key={item.id}
                id={item.id}>
                {item.name}: {item.message}
              </li>
            )
          })}
        </ul>
      </div>

      {/*think, delete options*/}

      <button className='button think' style={{ backgroundColor: this.state.color }} onClick={this.onChange}>Think...</button>

      <button className='button delete'>Delete last message</button>
    </div>
  }
}

export default LandingPage;