import React from 'react';
import styled from 'styled-components';
import _작품 from './_작품';
import { ListItem } from '../../../apis/list';

interface Props {
  작품_리스트: ListItem[];
}

const _작품_리스트 = ({ 작품_리스트 }: Props) => {
  return (
    <_컨테이너>
      <_작품리스트>
        {작품_리스트.map((작품, index) => {
          return <_작품 key={index} 작품={작품} />;
        })}
      </_작품리스트>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div``;

const _작품리스트 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 304px);
  align-items: center;
  justify-content: center;
`;

export default _작품_리스트;
