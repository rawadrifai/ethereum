import React from 'react';
import {Button} from 'react-bootstrap';
import './App.css';

class Main extends React.Component {
  render() {
    return (

      <div>

        <div className="container1">
          <div className="container1-1">account balance</div>
          <div className="container1-2">coinbase account</div>
        </div>

        <div className="container2">
          <Button className="sellarticle" bsStyle="primary">Sell Article</Button>
        </div>

      </div>
    );
  }
}

export default Main;
