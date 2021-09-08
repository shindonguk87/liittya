import React from 'react';
import Popover from 'react-awesome-popover';
import PopoverOverlay from '../Popover/PopoverOverlay';
import styled from 'styled-components';

const GrowthBox = ({ aimmeGrowth }) => {
  return (
    <GrowthBoxLayout>
      <p className={'font-garamond'}>Value of Growth prospects</p>
      <div className={'growth2'}>
        <span className={'font-garamond'}>{aimmeGrowth}</span>
        <Popover action="hover" placement="bottom-start" arrow={false} overlayColor={'transparent'}>
          <button></button>
          <PopoverOverlay>내용</PopoverOverlay>
        </Popover>
      </div>
    </GrowthBoxLayout>
  );
};

const GrowthBoxLayout = styled.article`
  display: flex;
  margin-top: 10px;
  align-content: center;

  p {
    color: #45a391;
    font-size: 1rem;
    line-height: 24px;
  }

  .growth2 {
    display: flex;
    align-items: center;
    padding-left: 10px;
    span {
      color: #45a391;
      background: url('/assets/images/icon-growth-up.png') no-repeat left center;
      padding-left: 25px;
      line-height: 24px;
      font-size: 1.875rem;
    }
  }
  button {
    margin-left: 10px;
    background: url('/assets/images/icon-popover.png') no-repeat center;
    background-size: 100% 100%;
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export default GrowthBox;
