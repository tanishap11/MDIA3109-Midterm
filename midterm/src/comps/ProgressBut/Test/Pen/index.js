import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .buttonthink {
      padding: 10px 15px;
      border-radius:5px;
      min-height:26px;
      min-width:105px;
      max-width:105px;
      color: white;
      border: 2px solid #DAD;
      background-color: #grey;
      cursor: pointer;
      margin:1%;
  }
`;

class LandingPage extends Component {



  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
      list: [],

      font: "black",
      color: "#dedede"
      

    }
  }


 onChange = () => {
  var left = document.querySelectorAll(".left");
  if (this.state.color === '#dedede'){
    this.setState({ color: '#DAD' });
  }
  else {
    this.setState({ color: '#dedede' });
  }
}

  render() {
    return <Container className='container'>

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

      <button className='buttonthink' style={{ backgroundColor: this.state.color,  }} onClick={this.onChange}>Pending</button>

    </Container>
  }
}

export default LandingPage;