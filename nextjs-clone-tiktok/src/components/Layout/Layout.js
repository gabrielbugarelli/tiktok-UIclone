import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

// styled components
import { Container, SidebarContainer, ContentContainer } from './s_layout'

const Layout = ({ children }) => {
  return (
    <>
      <Header> </Header>
      <Container>
        <SidebarContainer>
          <Sidebar> </Sidebar>
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  )
}

export default Layout
