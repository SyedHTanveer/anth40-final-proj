import React, { Component }  from 'react';
import {Popup} from 'react-leaflet';
import ReactHtmlParser from 'react-html-parser';
class MarkerPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: this.props.data.tna,
        page: "",
        search: "",
        lat: this.props.data.lat,
        lng: this.props.data.lng,
        col: this.props.data.cid
    }
  }

  _handleclick = async () => {
    console.log(this.props.data)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let url = "https://en.wikipedia.org/w/api.php"; 

    let params = {
        action: "query",
        list: "search",
        srsearch: this.state.data,
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    await fetch(proxyurl + url)
        .then((response) => {return response.json();})
        .then((response) => {
           this.setState({
             search: response.query.search[0].title,
            page: response.query.search[0].snippet
          });
        })
      .catch(function(error){console.log(error);});
  }

  render() {
    return (
      <Popup onOpen={this._handleclick}>
        <div>{this.state.data + " (" + this.state.col + ")"}</div>
        <div>{"Lat: " + this.state.lat + ", Lng: " + this.state.lng}</div>
        <div><a href={"https://en.wikipedia.org/wiki/" + this.state.search}>{"..." + ReactHtmlParser(this.state.page) + "..."}</a></div>
      </Popup> 
      );
  };
}

export default MarkerPopup;
