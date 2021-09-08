import React from 'react';
import styled from 'styled-components';
import SaleItem from './SaleItem';
import NationalCard from './NationalCard';
import AuctionChart from './AuctionChart';

const ReportAuction = ({ priceBidding, mostPopularAuction, mostPopularRegion, soldInAuction, unsoldInAuction }) => {
  return (
    <ReportAuctionLayout>
      <div className={'report__header'}>
        <h3>Present Condition of Artist in Auction Sales</h3>
      </div>

      <div className="flex">
        <div className="col">
          <div className="row">
            <div className="row_col row_col--small">
              <p>Most Participated Auction and Region</p>
              <NationalCard mostPopularAuction={mostPopularAuction} mostPopularRegion={mostPopularRegion} />
            </div>
            <div className="row_col row_col--small">
              <p>Sold and Unsold in Auction</p>
              <AuctionChart soldInAuction={soldInAuction} unsoldInAuction={unsoldInAuction} />
            </div>
          </div>
          <img src="/assets/images/auction-bg.png" alt="" className={'decoimg'} />
        </div>

        <div className="col">
          <div className="row">
            {priceBidding?.map((bidding, index) => {
              return (
                <div className="row_col" key={index}>
                  <p>{bidding.type} Price in Bidding</p>
                  <SaleItem
                    sale={{
                      lotImgSrc: bidding.lotImage,
                      price: bidding.lotPrice,
                      auction: bidding.lotAuction,
                      sale: bidding.lotSale,
                    }}
                    list={Boolean(0)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ReportAuctionLayout>
  );
};

const ReportAuctionLayout = styled.div`
  .decoimg {
    margin-top: 2em;
    max-width: 100%;
  }
  .flex {
    display: flex;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  .col {
    flex: 1;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    & ~ .col {
      margin-left: 6em;
      @media screen and (max-width: 1470px) {
        margin-left: 4em;
      }
      @media screen and (max-width: 1200px) {
        margin-left: 2em;
      }

      @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 4em;
      }
    }
  }
  .row {
    display: flex;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
    .row_col {
      flex: 1;
      max-width: 315px;

      & ~ .row_col {
        margin-left: 3em;
        @media screen and (max-width: 1470px) {
          margin-left: 1em;
        }
      }
      &.row_col--small {
        max-width: 220px;
        p {
          white-space: nowrap;
          @media screen and (max-width: 1200px) {
            white-space: normal;
          }
        }
        @media screen and (max-width: 768px) {
          max-width: 300px;

          .flex {
            display: flex;
          }
        }

        & ~ .row_col {
          margin-left: 8em;
          @media screen and (max-width: 1470px) {
            margin-left: 4em;
          }
          @media screen and (max-width: 1200px) {
            margin-left: 2em;
          }
        }
      }
      & > p {
        margin-bottom: 14px;
        @media screen and (max-width: 768px) {
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
`;

export default ReportAuction;
