import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { Container } from './s_feed'

const Feed = ({ posts }) => {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </Container>
  );
}

export default Feed;
