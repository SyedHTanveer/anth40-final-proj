import React, { Component }  from 'react';
import {Popup} from 'react-leaflet';
import axios from 'axios';

class MarkerPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.tna
    }
  }

  componentDidMount() {
    axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=human&exintro=1', {
      headers: {"Access-Control-Allow-Origin": "*"},
      responseType: 'json',
   }).then(response => {
  });
  }

  render() {
    console.log(this.state.data)
  return (
    <Popup>
      <div className='poup-text'>{this.state.data}</div>
    </Popup>
    );
  };
}

export default MarkerPopup;
