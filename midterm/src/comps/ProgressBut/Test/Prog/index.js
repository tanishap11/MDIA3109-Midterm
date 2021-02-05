import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .buttonthinkyellow {
      padding: 10px 15px;
      border-radius:5px;
      min-height:26px;
      min-width:105px;
      max-width:105px;
      color: white;
      border: 2px solid #FFC225;
      background-color: #grey;
      cursor: pointer;
      margin:1%;
  }
`;

class YellowBut extends Component {



  constructor(props) {
    super(props);

    this.state = {
      yellowname: '',
      yellowmessage: '',
      yellowlist: [],

      yellowfont: "black",
      yellowcolor: "#FFC225"
      

    }
  }


 onChangeYellow = () => {
  var left = document.querySelectorAll(".left");
  if (this.state.yellowcolor === '#FFC225'){
    this.setState({ yellowcolor: '#c1c1c1' });
  }
  else {
    this.setState({ yellowcolor: '#FFC225' });
  }
}

  render() {
    return <Container className='containeryellow'>

      {/* messages will be listed here */}
      <div className='messagesDiv' id='messagesDivId'>
        <ul>
          {/* List array is mapped through*/}
          {this.state.yellowlist.map(item => {
            return (
              <li className={(item.yellowname === this.state.yellowname ? 'right' : 'left')}
              style={{ yellowcolor: this.state.yellowfont }}
                key={item.id}
                id={item.id}>
                {item.yellowname}: {item.yellowmessage}
              </li>
            )
          })}
        </ul>
      </div>

      {/*think, delete options*/}

      <button className='buttonthinkyellow' style={{ backgroundColor: this.state.yellowcolor,  }} onClick={this.onChangeYellow}>In-Progress</button>

    </Container>
  }
}

export default YellowBut;