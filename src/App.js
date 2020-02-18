import React from 'react';
import './App.css';
import Numero from './components/Numero'
import Resultado from './components/Resultado'
import { Button, Container, Row } from 'react-bootstrap'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valor: 0,
      multiplicador: 37,
      resultado: 0
    }
  }

  numberChangedHandler = (event) => {
    this.setState({
      valor: event.target.value,
      resultado: parseInt(event.target.value) * parseInt(this.state.multiplicador)
    })
  }

  multiplierChangedHandler = (event) => {
    this.setState({
      multiplicador: parseInt(event.target.value),
      resultado: parseInt(event.target.value) * parseInt(this.state.valor)

    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <h1>CALCULADORA ONLINE</h1>
          </header>
          <Numero onchange={this.numberChangedHandler}/>
          <Row className="justify-content-center">
            <Button variant="primary" onClick={this.multiplierChangedHandler} value="37" style={{marginRight: 50, opacity: this.state.multiplicador === 37 ? 1 : 0.2}}> x 37 </Button>
            <Button variant="primary" onClick={this.multiplierChangedHandler} value="43" style={{opacity: this.state.multiplicador === 43 ? 1 : 0.2}}> x 43 </Button>
          </Row>
          <Resultado valor={this.state.resultado}/>
        </Container>
      </div>  
    );
  }

}

export default App;
