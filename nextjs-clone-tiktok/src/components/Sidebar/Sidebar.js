import React from 'react'

// styled components
import { Container, MenuItem, Following, FollowingHeader, InfoContainer, Links } from './s_sidebar'

// components
import User from '../User/User'

const Sidebar = () => {
  return (
    <Container>
      <MenuItem active>
        <img src='/images/homeIcon.svg' />
        <span> Para você </span>
      </MenuItem>

      <MenuItem>
        <img src='/images/peopleIcon.svg' />
        <span> Seguindo </span>
      </MenuItem>

      <Following>
        <FollowingHeader> Suas principais contas</FollowingHeader>
        <User user={{
          name: 'Husky Bolado',
          username: 'huskBolado',
          avatar: 'https://br.jetss.com/wp-content/uploads/2018/07/34489209_269481290457865_8456575350653059072_n-e1530797478255.jpg'
        }}
        />
      </Following>

      <InfoContainer>
        <Links margin>
          <a> Início </a>
          <a> Sobre </a>
          <a> Sala de imprensa </a>
          <a> Carreira </a>
          <a> ByteDance </a>
        </Links>

        <Links>
          <a> Ajuda  </a>
          <a> Segurança  </a>
        </Links>

        <Links>
          <a> Diretrizes da comunidade </a>
          <a> Termos </a>
        </Links>

        <Links margin>
          <a> Privacidade </a>
        </Links>

        <Links margin>
          <a> © 2021 TikTok </a>
        </Links>
      </InfoContainer>
    </Container>
  )
}

export default Sidebar
