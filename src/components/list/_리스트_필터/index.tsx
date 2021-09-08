import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { State } from '../../../store/list/state';
import selectors from '../../../store/selectors';
import { changeDate } from '../../../utils/format';
import _시작날짜_팝업 from './_시작날짜_팝업';
import _종료날짜_팝업 from './_종료날짜_팝업';
import _지역필터_팝업 from './_지역필터_팝업';
import _경매장필터_팝업 from './_경매장필터_팝업';

const 경매소_리스트: { [key: number]: string } = {
  1: "Christie's",
  2: "Sotheby's",
};

const 지역_리스트: { [key: number]: string } = {
  0: 'All',
  1: 'New York',
  2: 'London',
  3: 'Hong Kong',
  4: 'Paris',
  5: 'Amsterdam',
  6: 'Milan',
  7: 'Geneva',
  8: 'Zurich',
  9: 'Shanghai',
  10: 'Dubai',
  11: 'Doha',
  12: 'Online',
};

const _리스트_필터 = () => {
  const { startDate, endDate, minPrice, maxPrice, auctionType, locationType } = useSelector<RootState, State>(
    selectors.listState
  );

  const [경매장팝업열림, set경매장팝업열림] = useState<boolean>(false);
  const [지역팝업열림, set지역팝업열림] = useState<boolean>(false);

  const 선택된_경매소_리스트 = useMemo(() => {
    return auctionType ? auctionType.split(',').map(id => ({ id, name: 경매소_리스트[id] })) : [];
  }, [auctionType]);

  const 선택된_지역_리스트 = useMemo(() => {
    return locationType ? locationType.split(',').map(id => ({ id, name: 지역_리스트[id] })) : [];
  }, [locationType]);

  const 시작날짜 = useMemo(() => {
    return changeDate(startDate);
  }, [startDate]);

  const 마지막날짜 = useMemo(() => {
    return changeDate(endDate);
  }, [endDate]);

  return (
    <_컨테이너>
      <_필터>
        <_필터_타이틀>
          <div id="fromContainer" />
          <_필터_아이콘 />
        </_필터_타이틀>
        <_필터_텍스트>{시작날짜}</_필터_텍스트>
        <_시작날짜_팝업 />
      </_필터>
      <_필터>
        <_필터_타이틀>
          <div id="toContainer" />
          <_필터_아이콘 />
        </_필터_타이틀>
        <_필터_텍스트>{마지막날짜}</_필터_텍스트>
        <_종료날짜_팝업 />
      </_필터>
      <_필터>
        <_필터_타이틀>
          <_필터_타이틀_이름 id="price">Price</_필터_타이틀_이름>
          <_필터_아이콘 id="price_icon" />
        </_필터_타이틀>
        <_필터_텍스트>
          {minPrice} ~ {maxPrice}
        </_필터_텍스트>
      </_필터>
      <_필터>
        <_필터_타이틀
          onClick={() => {
            set경매장팝업열림(prev => !prev);
          }}
        >
          <_필터_타이틀_이름 id="auction_house">Auction House</_필터_타이틀_이름>
          <_필터_아이콘 id="auction_house_icon" />
        </_필터_타이틀>
        <_필터_텍스트>{선택된_경매소_리스트.map(({ name }) => name).join(', ')}</_필터_텍스트>
        <_경매장필터_팝업
          열림={경매장팝업열림}
          타이틀={'Auction Houses'}
          필터데이터={경매소_리스트}
          onClose={() => set경매장팝업열림(false)}
        />
      </_필터>
      <_필터>
        <_필터_타이틀
          onClick={() => {
            set지역팝업열림(prev => !prev);
          }}
        >
          <_필터_타이틀_이름 id="location">Location</_필터_타이틀_이름>
          <_필터_아이콘 id="location_icon" />
        </_필터_타이틀>
        <_필터_텍스트>
          {선택된_지역_리스트
            .slice(0, 2)
            .map(({ name }) => name)
            .join(', ')}
          {선택된_지역_리스트.length >= 3 ? `+ ${선택된_지역_리스트.length - 2}` : ''}
        </_필터_텍스트>
        <_지역필터_팝업
          열림={지역팝업열림}
          타이틀={'Locations'}
          필터데이터={지역_리스트}
          onClose={() => set지역팝업열림(false)}
        />
      </_필터>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  display: flex;
  border-bottom: 1px solid #ede9e2;
`;

const _필터 = styled.div`
  padding: 8px 0 8px 0;
`;

const _필터_타이틀 = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
`;

const _필터_타이틀_이름 = styled.span`
  font-size: 16px;
  line-height: 24px;
  padding-right: 15px;
`;

const _필터_텍스트 = styled.div`
  padding: 15px 10px 25px 5px;
  font-size: 20px;
  letter-spacing: -0.2px;
  font-family: 'EB Garamond', serif;
`;

const _필터_아이콘 = styled.div`
  width: 10px;
  height: 10px;
  background-image: url('http://www.aimmeart.com/resources/img/DownImg.png');
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 10px;
`;

export default _리스트_필터;
