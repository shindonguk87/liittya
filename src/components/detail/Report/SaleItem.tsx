import React from 'react';
import styled from 'styled-components';

const SaleItem = ({ sale, list = true, unit = '$' }) => {
  return (
    <SaleItemLayout list={list ? 1 : 0}>
      <a href="" target={'_blank'}>
        <span className="img">
          <img src={sale.lotImgSrc} alt={sale.auction} />
        </span>
        <div className={'info'}>
          <h3 className={'font-garamond'}>
            {unit} {sale.price}
          </h3>
          <p>
            {sale.auction}
            <br />
            {sale.sale}
          </p>
        </div>
      </a>
    </SaleItemLayout>
  );
};

const SaleItemLayout = styled.div`
  background: #fff;
  flex: 1;
  margin: ${props => (props.list ? '0 10px' : '0')};
  width: ${props => (props.list ? 'calc(25% - 20px)' : '100%')};
  flex: none;
  @media screen and (max-width: 1200px) {
    width: ${props => (props.list ? 'calc(33.333% - 20px)' : '100%')};
    &:nth-child(n + 4) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    margin: ${props => (props.list ? '0 5px' : '0')};
    width: ${props => (props.list ? 'calc(50% - 10px)' : '100%')};
    &:nth-child(n + 3) {
      margin-top: 10px;
    }
  }
  .img {
    width: 100%;
    padding-bottom: 75%;
    display: block;
    background: #eee;
    position: relative;
    img {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: top;
    }
  }
  .info {
    padding: 1.25em 1.75em;
    background: #fff;
    color: #000;
    @media screen and (max-width: 768px) {
      padding: 1em 1.25em;
    }

    h3 {
      font-size: 1.875rem;
      font-weight: 600;
      margin-bottom: 10px;
      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 0.875rem;
      color: #5a5a5a;
      line-height: 1.325em;
    }
  }
`;

export default SaleItem;
