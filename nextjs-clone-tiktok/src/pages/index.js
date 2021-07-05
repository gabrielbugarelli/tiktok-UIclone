import styled from 'styled-components'

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary}
`

const Index = () => {
  return (
    <Title>
      Tik Tok
    </Title>
  )
}

export default Index
