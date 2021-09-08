import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { State } from '../../../store/list/state';
import selectors from '../../../store/selectors';

interface Props {
  총갯수?: string;
  평균_가격?: string;
  현재_평균_가격?: string;
}

const _리스트_정보 = ({ 총갯수, 평균_가격, 현재_평균_가격 }: Props) => {
  const { isViewCurrentCurrency } = useSelector<RootState, State>(selectors.listState);

  const 현재가격_표시 = useMemo(() => isViewCurrentCurrency === 'Y', [isViewCurrentCurrency]);

  return (
    <_컨테이너>
      <_정보영역>
        <_정보>
          <_제목>Total</_제목>
          <_내용>{총갯수}</_내용>
        </_정보>
        <_정보>
          <_제목>Avg Price</_제목>
          <_내용>$ {현재가격_표시 ? 현재_평균_가격 : 평균_가격}</_내용>
        </_정보>
      </_정보영역>
      <_프린트
        onClick={() => {
          window.print();
        }}
      />
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ede9e2;
`;

const _정보영역 = styled.div`
  flex: 1;
  display: flex;
`;

const _정보 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 48px 16px 0;
`;

const _제목 = styled.span`
  color: #9a9a9a;
  font-size: 16px;
  line-height: 24px;
`;

const _내용 = styled.span`
  font-weight: 600;
  font-family: 'EB Garamond', serif;
  font-size: 40px;
  line-height: 52px;
`;

const _프린트 = styled.i`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  background-image: url('http://www.aimmeart.com/resources/img/print.png');
  cursor: pointer;
`;

export default _리스트_정보;
