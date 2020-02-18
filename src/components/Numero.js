import React from 'react';
import { Row } from 'react-bootstrap';

class Numero extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Row className="mb-4 justify-content-center mt-3">
        <input type="number" className="mr-2" onChange={this.props.onchange} placeholder="Introduce un número"/> NÚMERO
      </Row>
    );
  }

}

export default Numero;