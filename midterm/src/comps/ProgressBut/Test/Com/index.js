import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .buttonthinkgreen {
      padding: 10px 15px;
      border-radius:5px;
      min-height:26px;
      min-width:105px;
      max-width:105px;
      color: white;
      border: 2px solid #60BE68;
      background-color: #grey;
      cursor: pointer;
      margin:1%;
  }
`;

class GreenBut extends Component {



  constructor(props) {
    super(props);

    this.state = {
      greenname: '',
      greenmessage: '',
      greenlist: [],

      greenfont: "black",
      greencolor: "#60BE68"
      

    }
  }


 onChangegreen = () => {
  var left = document.querySelectorAll(".left");
  if (this.state.greencolor === '#60BE68'){
    this.setState({ greencolor: '#c1c1c1' });
  }
  else {
    this.setState({ greencolor: '#60BE68' });
  }
}

  render() {
    return <Container className='containergreen'>

      {/* messages will be listed here */}
      <div className='messagesDiv' id='messagesDivId'>
        <ul>
          {/* List array is mapped through*/}
          {this.state.greenlist.map(item => {
            return (
              <li className={(item.greenname === this.state.greenname ? 'right' : 'left')}
              style={{ greencolor: this.state.greenfont }}
                key={item.id}
                id={item.id}>
                {item.greenname}: {item.greenmessage}
              </li>
            )
          })}
        </ul>
      </div>

      {/*think, delete options*/}

      <button className='buttonthinkgreen' style={{ backgroundColor: this.state.greencolor,  }} onClick={this.onChangegreen}>Completed</button>

    </Container>
  }
}

export default GreenBut;