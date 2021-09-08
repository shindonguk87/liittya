import React, { useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  hammerPrice?: any;
  currentPrice?: any;
}

const _상세_네비게이션바 = ({ hammerPrice, currentPrice }: Props) => {
  function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.pageYOffset);
      }

      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return scrollPosition;
  }

  const windowPosition = useWindowPosition();

  return (
    <Layout scrollTop={windowPosition}>
      <div className={'header__top'}>
        <Link href="/">
          <a className={'logo'}>
            <Image src="/assets/images/logo.svg" alt="Animme" width={91} height={23} />
          </a>
        </Link>
        <a href="" className={'each-link'} target="_blank">
          Contact
        </a>
        <a href="" className={'each-link'} target="_blank">
          About us
        </a>
      </div>
      <div className={'header__bottom'}>
        <h2 className="name font-garamond">
          Andy Warhol, <span className={'font-garamond'}>Brillo Soap Pads Box</span>
        </h2>
        <div className={'priceInfo'}>
          <div>
            <span>Hammer Price</span>
            <strong className={'font-garamond'}>USD {hammerPrice}</strong>
          </div>
          <div>
            <span>Current Price</span>
            <strong className={'font-garamond'}>$ {currentPrice}</strong>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Layout = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2000;
  padding: 0 105px;
  background: #fff;
  @media screen and (max-width: 1470px) {
    padding: 0 10px;
  }
  .header__bottom {
    display: flex;
    align-items: center;
    height: ${props => (props.scrollTop > 50 ? 'auto' : '0px')};
    padding-bottom: ${props => (props.scrollTop > 50 ? '25px' : '0px')};
    overflow: hidden;
    transition: all 0.3s;
    @media screen and (max-width: 768px) {
      display: block;
      //height: ${props => (props.scrollTop > 50 ? '55px' : '0px')};
      padding-bottom: ${props => (props.scrollTop > 50 ? '5px' : '0px')};
      .priceInfo {
        margin-top: 12px;
        justify-content: center !important;
        padding-bottom: 10px;
        div {
          & ~ div {
            margin-left: 1em !important;
          }
        }
      }
    }

    .name {
      margin-right: auto;
      font-size: 1.25rem;
      font-weight: 600;
      span {
        font-size: 1em;
        font-weight: 400;
      }
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
    .priceInfo {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      div {
        display: flex;
        align-items: center;
        & ~ div {
          margin-left: 2em;
        }
      }
      span {
        font-size: 1rem;
        color: #9a9a9a;
        margin-right: 5px;
        font-weight: 300;
        @media screen and (max-width: 768px) {
          font-size: 0.875rem;
        }
      }
      strong {
        font-size: 1.5rem;
        color: #000;
        @media screen and (max-width: 768px) {
          font-size: 1.25rem;
        }
      }
    }
  }
  .header__top {
    height: ${props => (props.scrollTop > 50 ? '85px' : '100px')};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s;
    @media screen and (max-width: 1470px) {
      height: 60px;
      background: #fff;
      img {
        height: 25px;
      }
    }
    @media screen and (max-width: 768px) {
      img {
        height: 20px;
      }
    }
  }
  .logo {
    margin-right: auto;
  }
  .each-link {
    margin-left: 2em;
    font-size: 1rem;
    letter-spacing: 0.3px;
    color: #000;
  }
`;

export default _상세_네비게이션바;
