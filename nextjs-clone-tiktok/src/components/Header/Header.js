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
          <LogoIcon src='/images/logoIcon.svg' />
          <Logo src='/images/logo.svg' />
        </LogoContainer>

        <OptionsContainer>
          <Icon src='/images/uploadIcon.svg' />
          <Avatar>
            <img src='/images/avatar.jpg'/>
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  )
}

export default Header
