import React, { Component }  from 'react';
import {Popup} from 'react-leaflet';
class MarkerPopup extends Component {
  constructor(props) {
    super(props);

    (/\s/.test(this.props.data.tna)) ? (
      this.state = {
        data: this.props.data.tna.replace(/\s/g, "%20")
      }
  ) : (
    this.state = {
        data: this.props.data.tna
    }
  )
 
  }

   _handleclick = () => {

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=" + this.state.data + "&exintro=1"; // site that doesn’t send Access-Control-*
      console.log(url)
      fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.text())
      .then(contents => console.log(contents))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  render() {

      return (
    <Popup onOpen={this._handleclick}>
      <div className='poup-text'>{this.state.data}</div>
    </Popup>
    );
  };
}

export default MarkerPopup;
