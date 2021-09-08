import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class _ extends React.Component<{ lotImages: any }, { nav1: any; nav2: any }> {
  slider1;
  slider2;

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const { lotImages } = this.props;
    const slideToShowCount = lotImages.length >= 6 ? 6 : lotImages.length;

    const topSlideSetting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const navSlideSetting = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: slideToShowCount,
      slidesToScroll: 1,
    };

    return (
      <div>
        <TopSlideBox>
          <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} {...topSlideSetting}>
            {lotImages?.map(img => {
              return (
                <TopSlideItem key={img.imgSeq}>
                  <div className={'img'}>
                    <img src={img.imgSrc} alt="" />
                  </div>
                </TopSlideItem>
              );
            })}
          </Slider>
        </TopSlideBox>

        <NavSlideBox>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
            {...navSlideSetting}
          >
            {lotImages?.map(img => {
              return (
                <NavSlideItem key={img.imgSeq}>
                  <div className={'img'}>
                    <img src={img.imgSrc} alt="" />
                  </div>
                </NavSlideItem>
              );
            })}
          </Slider>
        </NavSlideBox>
      </div>
    );
  }
}

const TopSlideBox = styled.div`
  .slick-arrow {
    background: #eee;
    top: auto;
    bottom: -70px !important;
    transform: none;
    height: 60px;
    width: 30px;
    &.slick-next {
      right: 0;
      background: url('/assets/images/topslide-arrow-right.png') no-repeat center;
    }
    &.slick-prev {
      left: 0;
      background: url('/assets/images/topslide-arrow-left.png') no-repeat center;
    }

    &:before {
      display: none;
    }
  }
`;
const TopSlideItem = styled.div`
  background: #ebebeb;
  vertical-align: top;

  .img {
    padding: 10px;
    height: 594px;
    @media screen and (max-width: 1200px) {
      height: 405px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const NavSlideBox = styled.div`
  margin-top: 10px;
  padding: 0 30px;

  .slick-arrow {
    &:before {
      display: none;
    }
  }
  .slick-slide {
    width: auto !important;
  }

  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const NavSlideItem = styled.div`
  vertical-align: top;
  padding: 0 5px;

  .img {
    background: #ebebeb;
    padding: 5px;
    height: 48px;
    width: 48px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
