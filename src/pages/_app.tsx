import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aimme</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="//fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap" rel="stylesheet" />
        <link href="//fonts.googleapis.com/css?family=Muli:300,400,500,600,700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="//code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossOrigin="anonymous"
        />
        <script
          src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"
          integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
          crossOrigin="anonymous"
        />
        <script src="/js/monthpicker.js" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face{font-family:'Helvetica-Neue'; src: url('/assets/fonts/HelveticaNeue-Light.ttf'); font-weight: normal; font-style: normal;}
  @font-face{font-family:'Helvetica-Neue'; src: url('/assets/fonts/HelveticaNeueBd.ttf'); font-weight: bold; font-style: normal;}
  
  ${reset}
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font-family: "Helvetica Neue", arial, serif;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 300;
    color: #000;

    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .font-helveticaneue {
    font-family: 'HelveticaNeue', serif !important;
    
  }
  .font-garamond {
    font-family: 'EB Garamond', serif !important;
  }
  a {
    text-decoration: none;
  }
  a:link { text-decoration: none;}
  a:visited { text-decoration: none;}
  button {
    appearance: none;
    border: none;
    background: none;
    padding: 0;
  }

  .tab {
    .tab__contents {
      border-radius: 10px;
      background:#fff;
    }
    .tab__buttons {
      display: flex;
      margin-bottom: 5px;

      button {
        flex: 1;
        max-width: 200px;
        width: 100%;
        background:#fff;
        height: 50px;
        border-radius: 10px;
        margin-right: 5px;
        position:relative;
        outline-width: 0;
        &.active {
          &:after {
            content:'';
            width: 100%;
            height: 15px;
            background:#fff;
            display: block;
            position: absolute;
            left:0;
            bottom: -5px;
          }
        }
      }
    }
  }
  
  /* datePicker */
  .mtz-monthpicker.mtz-monthpicker-year {
    width: 100%; padding:8px 20px; border-radius: 4px; font-size: 15px;
    box-shadow: 0 1px 2px 0 #efe4e0; border: solid 1px rgba(157, 155, 155, 0.4); background-color: #fbf7f1;; margin-bottom: 11px;
    background-image: url(../../../../../..img/down1.png); background-position: right 10px top 10px; background-repeat: no-repeat; background-size: 20px;
  }
  .mtz-monthpicker {width: 100%;}
  .ui-state-default.mtz-monthpicker.mtz-monthpicker-month {
    border-radius: 2px; border: solid 1px #333333; padding:8px 12px !important; font-size: 14px; box-sizing: border-box;
    width: 95px; -webkit-box-sizing: border-box;-moz-box-sizing: border-box; box-sizing: border-box; cursor: pointer !important;
    transition: .3s cubic-bezier(.215,.61,.355,1);
    background-color:white;;
  }

  .ui-state-default.mtz-monthpicker.mtz-monthpicker-month.ui-state-disabled { color:gray; opacity: 0.3; cursor: not-allowed !important;}
  .ui-state-default.mtz-monthpicker.mtz-monthpicker-month.ui-state-disabled:hover {background-color: initial; color:gray; }
  .ui-state-default.mtz-monthpicker.mtz-monthpicker-month:hover {background-color: #333333; color: white;}
  .ui-datepicker {padding:15px 12px !important; background-color:white; position: relative; overflow: visible !important; width: 300px !important;
    box-shadow: 0 1px 2px 0 #efe4e0;
    border: solid 1px rgba(157, 155, 155, 0.4);
    animation-name: datepicker; animation-duration:0.35s; transform-origin: top;
  }
  .ui-state-active.mtz-monthpicker-month {background-color: #333333 !important; color: white !important;}

  .shared-img-con {cursor: pointer;}
  .shared-img-con.web {    position: absolute; right: 20px; top: 16px; display: none; z-index: 10;}
  .shared-img-con > img{ width: 24px; height: 24px;}

  #goservay {cursor: pointer;}
  .go-servay-con {background-color: #344f91; padding: 6px 8px; display:inline-block; color: white; border-radius: 2px;}
  .go-servay-con.type2 {padding: 16px 24px; }
  .go-servay-con > a {display:block; font-size: 20px; line-height: 24px;}

  /*  date-picker  */
  /* jquery ui datepicker month year picker */
  .popup-title {position: relative;}

  .vmDim { position: absolute; width: 100%; height: 100%; top: 0;}
`;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(MyApp);
