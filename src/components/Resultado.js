import React from 'react';
import {Row} from 'react-bootstrap'

class Resultado extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Row className="justify-content-center mt-4">
        <p>RESULTADO: {this.props.valor}</p>
      </Row>
    );
  }

}

export default Resultado;