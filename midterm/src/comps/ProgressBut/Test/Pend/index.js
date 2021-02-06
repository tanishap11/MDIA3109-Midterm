import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .buttonthinkblue {
      padding: 10px 15px;
      border-radius:5px;
      min-height:26px;
      min-width:105px;
      max-width:105px;
      color: white;
      border: 2px solid #0D71E7;
      background-color: #grey;
      cursor: pointer;
      margin:1%;
  }
`;

class BlueBut extends Component {



  constructor(props) {
    super(props);

    this.state = {
      bluename: '',
      bluemessage: '',
      bluelist: [],

      whitefont:"#0D71E7",
      bluefont: "white",
      bluecolor: "#0D71E7"
      

    }
  }


 onChangeblue = () => {
  var left = document.querySelectorAll(".left");
  if (this.state.bluecolor === '#0D71E7'){
    this.setState({ bluecolor: '#c1c1c1' });
  }
  else {
    this.setState({ bluecolor: '#0D71E7' });
  }
}

  render() {
    return <Container className='containerblue'>

      {/* messages will be listed here */}
      <div className='messagesDiv' id='messagesDivId'>
        <ul>
          {/* List array is mapped through*/}
          {this.state.bluelist.map(item => {
            return (
              <li className={(item.bluename === this.state.bluename ? 'right' : 'left')}
              style={{ bluecolor: this.state.whitefont }}
                key={item.id}
                id={item.id}>
                {item.bluename}: {item.bluemessage}
              </li>
            )
          })}
        </ul>
      </div>

      {/*think, delete options*/}

      <button className='buttonthinkblue' style={{ backgroundColor: this.state.bluecolor,  }} onClick={this.onChangeblue}>Pending</button>

    </Container>
  }
}

export default BlueBut; 
