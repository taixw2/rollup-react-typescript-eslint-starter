import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HelloWorld = styled.h1`
  color: #fff;
`

function App() {
  return (
    <Container>
      <HelloWorld>Hello World</HelloWorld>
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
