
import './App.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { functions } from './firebase-config';
import { httpsCallable } from 'firebase/functions';

function App() {
 
  const [reply,setReply] = useState("Hello there, my name is Genie")

  const SayHello = async ()=>{
    try{
      // WILL CALL GEMINI TMR
      const helloGenie = httpsCallable(functions,'helloGenie');
      const temp = await helloGenie();
      setReply(temp.data);
    
    }
    catch(err)
    {
      console.log(err);
    }

  }


 
 
  return (
    <div className="App">
      <header className="App-header">
        
      <Container className='genie-reply d-flex flex-column justify-content-center align-items-center'>
      <Row>
        <Col>
          <h1 className='inner-replies'>{reply}</h1>
        </Col>
      </Row>
      <Row>

      <Button variant="outline-light p-2 m-4" onClick={()=>{SayHello()}}>Say Hello!</Button>
        
      </Row>
      
    </Container>

      </header>
    </div>
  );
}

export default App;
