import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import useSearchArtist from '../../../../../hooks/swr/useSearchArtist';
import { useDispatch, useSelector } from 'react-redux';
import { setArtistSeqAction } from '../../../../../store/list/actions';
import { RootState } from '../../../../../store/reducers';
import { State } from '../../../../../store/list/state';
import selectors from '../../../../../store/selectors';

interface Props {
  열림: boolean;
  onClose: () => void;
}

const _작가_검색 = ({ 열림, onClose }: Props) => {
  const dispatch = useDispatch();
  const inputRef = createRef<HTMLInputElement>();
  const { artistSeq } = useSelector<RootState, State>(selectors.listState);
  const [검색어, set검색어] = useState<string>('');
  const { data } = useSearchArtist({
    apiParams: { artistName: 검색어 },
  });

  useEffect(() => {
    if (열림) {
      inputRef.current?.focus();
    }
  }, [inputRef, 열림]);

  return (
    <_입력모드_컨테이너 열림={열림}>
      <_작가_검색창
        ref={inputRef}
        type="text"
        placeholder="Artist name"
        value={검색어}
        onChange={e => {
          set검색어(e.target.value);
          if (e.target.value === '') {
            onClose();
          }
        }}
      />
      <_검색_결과창>
        {data?.map(({ artistName, seq }) => {
          return (
            <_검색_아이템
              key={artistName}
              onClick={() => {
                const seqSet = new Set(artistSeq ? artistSeq.split(',') : []);
                seqSet.add(String(seq));
                dispatch(
                  setArtistSeqAction({
                    artistSeq: Array.from(seqSet).join(','),
                  })
                );
                onClose();
              }}
            >
              {artistName}
            </_검색_아이템>
          );
        })}
      </_검색_결과창>
    </_입력모드_컨테이너>
  );
};

const _입력모드_컨테이너 = styled.div<{ 열림: boolean }>`
  display: ${({ 열림 }) => (열림 ? 'flex' : 'none')};
  background-color: #fff;
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const _작가_검색창 = styled.input`
  padding: 31px 105px 31px 80px;
  border: none;
  font-size: 16px;
  color: #aaaaaa;
  box-shadow: 0 1px 2px 0 #efe4e0;
  width: 100%;
  height: 100%;
  cursor: text;
  :focus {
    outline: none;
  }
  :-ms-input-placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
    color: #aaaaaa;
  }
`;

const _검색_결과창 = styled.div`
  position: absolute;
  top: 89px;
  background-color: #fff;
  width: 100%;
`;

const _검색_아이템 = styled.div`
  cursor: pointer;
  padding: 0 80px;
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 0.3px;

  :hover {
    background-color: #fbf7f1;
  }
`;

export default _작가_검색;
