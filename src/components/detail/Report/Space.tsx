import React from 'react';
import styled from 'styled-components';

const Space = () => {
  return <SpaceLayout />;
};

const SpaceLayout = styled.div`
  padding-top: 100px;
  @media screen and (max-width: 1470px) {
    padding-top: 60px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;

export default Space;
