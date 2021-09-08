import React, { useState } from 'react';
import styled from 'styled-components';
import ArtistItem from './ArtistItem';

const ReportOverview = ({ topMediums, averageSize, relatedArtists, artworkCategory, lotImages }) => {
  const [showScaleBox, setShowScaleBox] = useState(false);
  let sizeX = 0;
  let sizeY = 0;

  // averageSize 변경
  '239.4 x 175.9'.split('x').map((data, idx) => {
    if (idx === 0) {
      sizeY = ((Number(data.trim()) * 300) / 170 / 765) * 100;
    }
    if (idx === 1) {
      sizeX = ((Number(data.trim()) * 300) / 170 / 765) * 100;
    }
  });

  return (
    <ReportOverviewLayout>
      <div className={'report__header'}>
        <h3>Artist overview</h3>
      </div>

      <div className="flex">
        <div className="col">
          <p className={'over_title'}>Artist Category</p>
          <ul className={'category'}>
            {artworkCategory?.map((category, index) => {
              return <li key={index}>{category.category}</li>;
            })}
          </ul>
          <br />
          <br />
          <p className={'over_title'}>Top Two Mediums of Major Deals</p>
          <div className={'majorDeals'}>
            {topMediums?.map(medium => {
              return (
                <div key={medium.seq} className={'majorDealItem'}>
                  <div className="img">
                    <img src={`/assets/images/icon-${medium.medium}.png`} alt="" />
                  </div>
                  <div className="info">
                    <p>{medium.medium}</p>
                    <h3 className={'font-garamond'}>{medium.ratio}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col">
          <p className={'over_title'}>Average Size of Major Deals</p>
          <div className={'sizebox'}>{averageSize}</div>
          <div className={'scalebox'}>
            <img src="/assets/images/icon-scale-arrow.png" alt="" />
            <button className={'link'} onClick={() => setShowScaleBox(true)}>
              Check the Real Scale
            </button>

            {showScaleBox && (
              <div className={'scalebox__preview'}>
                <div className={'scalebox__bg'} onClick={() => setShowScaleBox(false)} />
                <div className={'scalebox__content '}>
                  <img src="/assets/images/pic-size-bg.png" alt="" />
                  <PickBox sizeX={sizeX} sizeY={sizeY}>
                    <img src={lotImages[0]?.imgSrc} alt="" />
                  </PickBox>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col col--artist">
          <p className={'over_title'}>Related Artists</p>
          <div className={'artists'}>
            {relatedArtists?.map((artist, index) => {
              return <ArtistItem key={`${artist.artistSeq}_${index}`} artist={artist} />;
            })}
          </div>
        </div>
      </div>
    </ReportOverviewLayout>
  );
};

const ReportOverviewLayout = styled.div`
  .flex {
    display: flex;
    @media screen and (max-width: 1200px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 600px) {
      display: block;
    }
  }

  .col {
    flex: 1;

    &.col--artist {
      flex: 2;
      @media screen and (max-width: 1200px) {
        width: 100%;
        flex: none;
        margin-top: 4em;
        margin-left: 0 !important;
      }
    }

    & ~ .col {
      margin-left: 5em;

      @media screen and (max-width: 1200px) {
        margin-left: 3em;
      }
      @media screen and (max-width: 600px) {
        margin-left: 0;
        margin-top: 4em;
      }
    }
  }

  .artists {
    display: flex;
    flex-wrap: wrap;
  }

  .over_title {
    font-size: 1rem;
    margin-bottom: 10px;
    @media screen and (max-width: 1200px) {
      text-align: center;
    }
  }

  li {
    color: #0c435b;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.25em;
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }

  .sizebox {
    width: 100%;
    background: #eee4d6;
    text-align: center;
    padding: 7.25em 0;
  }

  .scalebox {
    display: flex;
    align-items: center;
    margin-top: 1em;

    .link {
      flex: 1;
      background: #222;
      color: #fff;
      font-size: 1rem;
      line-height: 50px;
      text-align: center;
      margin-left: 1em;
      border-radius: 2em;
    }
  }

  .majorDeals {
    display: flex;
  }

  .majorDealItem {
    flex: 1;
    text-align: center;

    .img {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      border-top: 5px solid #eee4d6;
      padding-top: 10px;
    }

    p {
      font-size: 1rem;
      line-height: 1.25em;
    }

    h3 {
      font-size: 1.875rem;
      line-height: 1.25em;
      font-weight: 600;
    }
  }

  .scalebox__preview {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 8000;
    display: flex;
    align-items: center;
    justify-content: center;

    .scalebox__content {
      position: relative;
      z-index: 1;
      max-width: 100%;

      img {
        max-width: 100%;
      }
    }

    .scalebox__bg {
      left: 0;
      top: 0;
      z-index: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.25);
    }
  }
`;

const PickBox = styled.div`
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translate(-50%, -50%);
  background: #eeeeee;
  z-index: 5;
  width: ${props => `${(props.sizeX * 300) / 300}%`};
  height: ${props => `${(props.sizeY * 300) / 300}%`};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ReportOverview;
