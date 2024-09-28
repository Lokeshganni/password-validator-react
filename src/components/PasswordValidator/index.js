import {useState} from 'react'
import {MainContainer, Container, Heading} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState(true)
  const handleOnChangePW = event => {
    setPassword(event.target.value)
    if (event.target.value.length >= 8) {
      setErrMsg(false)
    }
  }
  return (
    <MainContainer>
      <Container>
        <Heading>Password Validator</Heading>
        <p>Check how strong and secure is your password</p>
        <input value={password} onChange={handleOnChangePW} type="password" />
        <p>{errMsg ? 'Your password must be at least 8 characters' : ''}</p>
      </Container>
    </MainContainer>
  )
}

export default PasswordValidator
