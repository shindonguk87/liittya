import React from 'react';
import styled from 'styled-components';

const PopoverOverlay = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  width: 300px;
  background: #fff;
  font-size: 14px;
  line-height: 1.5em;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 1em;
  border: 1px solid #ddd;
`;

export default PopoverOverlay;
