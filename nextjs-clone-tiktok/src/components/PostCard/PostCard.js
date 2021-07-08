import React from 'react';
import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Song,
  Tag,
  Content,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  Actions,
  Action,
  ButtonContainer
} from './s_postcard';

import Button from '../Button/Button';

const PostCard = ({ post }) => {
  return (
    <Container>
      <Header>
        <PersonContainer>
          <ButtonContainer>
            <Button fontSize={14} outlined>Seguir</Button>
          </ButtonContainer>
          <Avatar src={post?.author?.avatar} />
          <Info>
            <Author>
              {post?.author?.username}
              <span>{post?.author?.name}</span>
            </Author>
            <Description>
              <span>{post?.description}</span>
              {post?.tags?.map((tag, index) => (
                <Tag key={index}>
                  {tag.title}
                </Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
      </Header>
      <Content>
        <Song></Song>
        <VideoContainer>
          <Video
            src={post?.videoUrl}
            webkit-playinline='true'
            playsinline=''
            loop='true'
            preload='metada'
          >

          </Video>
          <ActionsContainer>
            <PlayerIcon src='imageslplayIcon.svg' />
          </ActionsContainer>
        </VideoContainer>
      </Content>

      <Actions>
        <Action>
          <img />
          <a></a>
        </Action>

        <Action>
          <img />
          <a></a>
        </Action>

        <Action>
          <img />
          <a></a>
        </Action>
      </Actions>
    </Container>
  );
}

export default PostCard;
