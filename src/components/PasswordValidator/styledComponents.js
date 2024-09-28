import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
`
