import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar style={{backgroundColor:"purple"}}>
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder text-light ' style={{fontSize:"30px"}}>
            <img 
              alt=""
              src="https://media.giphy.com/media/B5HVfbAU9TduM/giphy.gif"
              width="60"
              height="60"
              className="d-inline-block border rounded "
              
            />{' '}
            Automatic Timer
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
