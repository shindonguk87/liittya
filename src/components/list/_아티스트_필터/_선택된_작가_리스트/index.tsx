import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { State } from '../../../../store/list/state';
import selectors from '../../../../store/selectors';
import { setArtistSeqAction } from '../../../../store/list/actions';
import _작가_검색 from './_작가_검색';
import { fetcher } from '../../../../apis/_axios';

const _선택된_작가_리스트 = () => {
  const dispatch = useDispatch();
  const { artistSeq } = useSelector<RootState, State>(selectors.listState);

  const [선택_작가_리스트, set선택_작가_리스트] = useState([]);
  const [입력모드, set입력모드] = useState<boolean>(false);

  const 선택_작가_리스트_세팅 = useCallback(async () => {
    const arr = artistSeq ? artistSeq.split(',') : [];

    const result = await Promise.all(
      arr.map(seq => {
        return fetcher(`/aimme/api/v2/getArtist/${seq}`);
      })
    );

    return set선택_작가_리스트(result);
  }, [artistSeq]);

  const 작가_삭제 = useCallback(
    (작가번호: number) => {
      const seqSet = new Set(artistSeq.split(','));
      seqSet.delete(String(작가번호));
      dispatch(
        setArtistSeqAction({
          artistSeq: seqSet.size > 0 ? Array.from(seqSet).join(',') : undefined,
        })
      );
    },
    [dispatch, artistSeq]
  );

  useEffect(() => {
    선택_작가_리스트_세팅();
  }, [artistSeq, 선택_작가_리스트_세팅]);

  return (
    <_컨테이너>
      <_타이틀>Result For</_타이틀>
      <_추가버튼 onClick={() => set입력모드(true)}>
        <_추가_아이콘 src={'/assets/images/icon-plus.png'} alt="" />
      </_추가버튼>
      {선택_작가_리스트.map(작가 => (
        <_작가버튼 key={작가.artistSeq} onClick={() => 작가_삭제(작가.artistSeq)}>
          <_작가이름>{작가.artistName}</_작가이름>
          <_삭제_아이콘 src={'/assets/images/icon-cancel.png'} alt="" />
        </_작가버튼>
      ))}
      <_작가_검색 열림={입력모드} onClose={() => set입력모드(false)} />
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 84px;
`;

const _타이틀 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  line-height: 24px;
  width: 100px;
`;

const _추가버튼 = styled.div`
  background-color: #fff;
  width: 72px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px 8px 0;
  border-radius: 4px;
  cursor: pointer;
`;

const _추가_아이콘 = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _작가버튼 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 56px;
  margin: 0 8px 8px 0;
  border-radius: 4px;
  padding: 0 24px;
  cursor: pointer;
`;

const _작가이름 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  line-height: 24px;
  padding-right: 11px;
`;

const _삭제_아이콘 = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default _선택된_작가_리스트;
