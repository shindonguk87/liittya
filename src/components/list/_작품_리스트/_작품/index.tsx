import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ListItem } from '../../../../apis/list';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { State } from '../../../../store/list/state';
import selectors from '../../../../store/selectors';

interface Props {
  작품: ListItem;
}

const _작품 = ({ 작품 }: Props) => {
  const router = useRouter();

  const { isViewCurrentCurrency } = useSelector<RootState, State>(selectors.listState);

  const 현재가격_표시 = useMemo(() => isViewCurrentCurrency === 'Y', [isViewCurrentCurrency]);

  return (
    <_컨테이너
      onClick={() => {
        router.push(`/list/detail/${작품.lotUuid}`);
      }}
    >
      <_이미지_영역>
        <_이미지 src={작품.repImageUrl} alt="" />
      </_이미지_영역>
      <_설명>
        <_제목_영역>
          <_제목 현재가격_표시={현재가격_표시}>
            {현재가격_표시 ? `$ ${작품.currentPrice}` : `${작품.currency} ${작품.price}`}
          </_제목>
        </_제목_영역>
        <_작가명>{작품.artistName}</_작가명>
        <_작가정보>{작품.birth}</_작가정보>
        <_경매정보>{작품.saleInfo}</_경매정보>
      </_설명>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  position: relative;
  height: 452px;
  width: 292px;
  margin: 0 6px 52px;
  cursor: pointer;
`;

const _이미지_영역 = styled.div`
  width: 292px;
  height: 292px;
  background-color: #ede6db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _이미지 = styled.img`
  object-fit: contain;
  width: 292px;
  height: 292px;
`;

const _설명 = styled.div`
  background-color: #ffffff;
  width: 272px;
  height: 160px;
  position: absolute;
  top: 270px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
`;

const _제목_영역 = styled.div`
  font-weight: 300;
  color: #454545;
`;

const _제목 = styled.span<{ 현재가격_표시: boolean }>`
  ${({ 현재가격_표시 }) => (현재가격_표시 ? 'background-color:#fff3cc;' : '')}
  font-size: 24px;
  font-family: 'EB Garamond', serif;
  letter-spacing: 0;
  font-weight: normal;
`;

const _작가명 = styled.span`
  font-size: 16px;
  line-height: 24px;
  padding-top: 8px;
`;

const _작가정보 = styled.span`
  font-size: 10px;
  line-height: 12px;
  padding-bottom: 6px;
`;

const _경매정보 = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #8f8f8f;
`;

export default _작품;
