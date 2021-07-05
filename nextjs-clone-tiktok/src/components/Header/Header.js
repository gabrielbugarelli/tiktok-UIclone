import React from 'react'
import {
  Container,
  Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar
} from './s_header'

const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src='/images/logoIcon.svg'> </LogoIcon>
          <Logo src='/images/logo.svg'> </Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon> </Icon>
          <Avatar>
            <img src='https://avatars.githubusercontent.com/u/47955200?v=4' />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  )
}

export default Header
