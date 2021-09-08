import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { State } from '../../../../store/list/state';
import selectors from '../../../../store/selectors';
import { setPageNoAction } from '../../../../store/list/actions';

const 한페이지_표시_갯수 = 20;

interface Props {
  총_갯수: number;
}

const _페이지네이션 = ({ 총_갯수 }: Props) => {
  const dispatch = useDispatch();
  const { pageNo } = useSelector<RootState, State>(selectors.listState);

  const 페이지_버튼 = useMemo(() => {
    const 버튼_리스트 = [];
    for (let i = 1; i <= Math.ceil(총_갯수 / 한페이지_표시_갯수); i++) {
      const countPageNo = pageNo - 1;
      if (i >= countPageNo - (countPageNo % 5) + 1 && i <= countPageNo - (countPageNo % 5) + 5) {
        버튼_리스트.push(i);
      }
    }
    return 버튼_리스트;
  }, [총_갯수, pageNo]);

  return (
    <_컨테이너>
      <_컨텐츠>
        <_버튼
          onClick={() => {
            if (pageNo > 1) {
              dispatch(setPageNoAction({ pageNo: pageNo - 1 }));
            }
          }}
        >
          Prev
        </_버튼>
        {페이지_버튼.map(페이지 => {
          return (
            <_버튼
              key={페이지}
              현재페이지={pageNo === 페이지}
              onClick={() => {
                dispatch(setPageNoAction({ pageNo: 페이지 }));
              }}
            >
              {페이지}
            </_버튼>
          );
        })}
        <_버튼
          onClick={() => {
            if (pageNo <= Math.ceil(총_갯수 / 한페이지_표시_갯수)) {
              dispatch(setPageNoAction({ pageNo: pageNo + 1 }));
            }
          }}
        >
          Next
        </_버튼>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;

const _컨텐츠 = styled.div`
  display: flex;
`;

const _버튼 = styled.div<{ 현재페이지: boolean }>`
  cursor: pointer;
  background-color: ${({ 현재페이지 }) => (현재페이지 ? '#ab7b6d' : '#fff')};
  color: ${({ 현재페이지 }) => (현재페이지 ? '#fff' : '#000')};
  padding: 4px 7px;
  margin: 0 4px;
  font-size: 16px;
`;

export default _페이지네이션;
