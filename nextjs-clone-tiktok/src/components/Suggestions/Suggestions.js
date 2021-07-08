import React from 'react';
import Button from '../Button/Button';
import RecommendCard from '../RecommendCard/RecommendCard'

import {
  Container,
  IconContainer,
  Icon,
  BoxContainer,
  BoxHeader,
  ItemContainer,
  Item,
  User,
  ArrowIcon,
  DownloadImage

} from './s_suggestions'

const Suggestions =
  ({ people, itens }) => {
    return (
      <Container>
        <IconContainer>
          <Icon src="/images/facebookIcon.svg"></Icon>
          <Icon src="/images/pinterestIcon.svg"></Icon>
          <Icon src="/images/twitterIcon.svg"></Icon>
        </IconContainer>

        <BoxContainer>
          <BoxHeader>
            <span> Contas sugeridas </span>
          </BoxHeader>
          <ItemContainer>
            {people?.map((person, index) => {
              <Item>
                <User key={index} user={person} />
                <Button key={index} fontSize={14} outlined>Seguir</Button>
              </Item>
            })}
          </ItemContainer>
        </BoxContainer>

        <BoxContainer>
          <BoxHeader>
            <span> Descobrir</span>
          </BoxHeader>
          <ItemContainer>
            {itens?.map((item, index) => {
              <Item>
                <RecommendCard key={index} recommend={item} />
                <ArrowIcon></ArrowIcon>
              </Item>
            })}
          </ItemContainer>
        </BoxContainer>

        <DownloadImage src="/images/appstore.png" />
        <DownloadImage src="/images/palystore.png" />
        <DownloadImage src="/images/amazon.png" />
      </Container>
    );
  }

export default Suggestions;
