import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setLocationTypeAction } from '../../../../store/list/actions';
import { RootState } from '../../../../store/reducers';
import { State } from '../../../../store/list/state';
import selectors from '../../../../store/selectors';

interface Props {
  열림: boolean;
  타이틀: string;
  필터데이터: { [key: number]: string };
  onClose: () => void;
}

const _지역필터_팝업 = ({ 열림, 타이틀, 필터데이터, onClose }: Props) => {
  const dispatch = useDispatch();
  const { locationType } = useSelector<RootState, State>(selectors.listState);
  const 선택데이터 = useMemo(() => (locationType ? locationType.split(',') : []), [locationType]);

  const 지역_변경 = useCallback(
    (key: string) => {
      if (선택데이터?.includes(key)) {
        if (locationType) {
          const set = new Set(locationType.split(','));
          set.delete(key);
          dispatch(
            setLocationTypeAction({
              locationType: Array.from(set).join(','),
            })
          );
        } else {
          dispatch(
            setLocationTypeAction({
              locationType: undefined,
            })
          );
        }
      } else {
        if (locationType) {
          const set = new Set(locationType.split(','));
          set.add(key);
          dispatch(
            setLocationTypeAction({
              locationType: Array.from(set).join(','),
            })
          );
        } else {
          dispatch(
            setLocationTypeAction({
              locationType: key,
            })
          );
        }
      }
    },
    [dispatch, locationType, 선택데이터]
  );

  // useEffect(() => {
  //   const eventListener = () => {
  //     if (열림) {
  //       onClose();
  //     }
  //   };
  //
  //   document.body.addEventListener("click", eventListener);
  //
  //   return () => {
  //     document.body.removeEventListener("click", eventListener);
  //   };
  // }, [열림]);

  return (
    <_컨테이너 열림={열림}>
      <_헤더>
        <_타이틀>{타이틀}</_타이틀>
        <_닫기버튼 onClick={onClose} src="http://localhost:3000/assets/images/icon-cancel.png" alt="" />
      </_헤더>
      <_필터>
        {Object.keys(필터데이터).map(key => {
          return (
            <_필터_아이템 key={key}>
              <_체크박스 type="checkbox" checked={선택데이터.includes(String(key))} onChange={() => 지역_변경(key)} />
              {필터데이터[key]}
            </_필터_아이템>
          );
        })}
      </_필터>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div<{ 열림: boolean }>`
  display: ${({ 열림 }) => (열림 ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #fff;
  padding: 20px 16px;
  position: absolute;
  z-index: 1;
`;

const _헤더 = styled.div`
  display: flex;
  padding-bottom: 16px;
`;

const _타이틀 = styled.span`
  font-size: 16px;
  flex: 1;
`;

const _닫기버튼 = styled.img`
  width: 20px;
  height: 20px;
`;

const _필터 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 134px);
  row-gap: 16px;
`;

const _필터_아이템 = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const _체크박스 = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export default _지역필터_팝업;
