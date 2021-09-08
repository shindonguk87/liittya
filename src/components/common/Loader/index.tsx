import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  indicatorColor?: string;
  backgroundColor?: string;
  fullSize?: boolean;
}

const Loader = ({ className, indicatorColor = '#05c072', backgroundColor = '#fff', fullSize = false }: Props) => {
  return (
    <Container className={className} fullSize={fullSize}>
      <SpinnerWrapper>
        <Spinner indicatorColor={indicatorColor} backgroundColor={backgroundColor} fullSize={fullSize} />
      </SpinnerWrapper>
    </Container>
  );
};

const Container = styled.div<{ fullSize: boolean }>`
  ${({ fullSize }) =>
    fullSize ? 'display: flex; height: calc(100vh - 60px);' : 'display: inline-block; vertical-align: middle;'}
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div<{
  indicatorColor: string;
  backgroundColor: string;
  fullSize: boolean;
}>`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  width: ${({ fullSize }) => (fullSize ? 24 : 16)}px;
  height: ${({ fullSize }) => (fullSize ? 24 : 16)}px;
  margin: -5px 10px 0;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: ${({ fullSize }) => (fullSize ? 5 : 3)}px solid ${({ backgroundColor }) => backgroundColor};
  border-right: ${({ fullSize }) => (fullSize ? 5 : 3)}px solid ${({ backgroundColor }) => backgroundColor};
  border-bottom: ${({ fullSize }) => (fullSize ? 5 : 3)}px solid ${({ backgroundColor }) => backgroundColor};
  border-left: ${({ fullSize }) => (fullSize ? 5 : 3)}px solid ${({ indicatorColor }) => indicatorColor};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
