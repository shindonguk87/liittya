import React from 'react';
import styled from 'styled-components';
import Section from '../Layout/Section';
import Wrap from '../Layout/Wrap';
import ReportAuthor from './ReportAuthor';
import Space from './Space';
import ReportOverview from './ReportOverview';
import ReportAuction from './ReportAuction';
import ReportRegion from './ReportRegion';
import ReportWorks from './ReportWorks';
import ReportDistribution from './ReportDistribution';
import ReportSold from './ReportSold';
import ReportIssue from './ReportIssue';

const Report = ({
  artist,
  artistInfo,
  topMediums,
  averageSize,
  relatedArtists,
  mostPopularAuction,
  mostPopularRegion,
  soldInAuction,
  unsoldInAuction,
  priceBidding,
  lastDecadeAuctionInfo,
  mostRecentSoldLotList,
  highestPriceSoldLotList,
  recentIssueList,
  artworkCategory,
  artistMarketRisk,
  lotImages,
}) => {
  return (
    <ReportLayout>
      <Section>
        <Wrap>
          <h2 className={'font-garamond'}>
            Artist Analytics Report
            <button>
              <img src="/assets/images/icon-mor.png" alt="" />
            </button>
          </h2>

          <div className={'report__content'}>
            <ReportAuthor artist={artist} artistInfo={artistInfo} artistMarketRisk={artistMarketRisk} />
            <Space />

            <ReportOverview
              topMediums={topMediums}
              averageSize={averageSize}
              relatedArtists={relatedArtists}
              artworkCategory={artworkCategory}
              lotImages={lotImages}
            />
            <Space />

            <ReportAuction
              priceBidding={priceBidding}
              mostPopularAuction={mostPopularAuction}
              mostPopularRegion={mostPopularRegion}
              soldInAuction={soldInAuction}
              unsoldInAuction={unsoldInAuction}
            />
            <Space />

            <ReportRegion lastDecadeAuctionInfo={lastDecadeAuctionInfo} />
            <Space />

            <ReportWorks />
            <Space />

            <ReportDistribution />
            <Space />

            <ReportSold title={'This artist’s most recent sold lots'} list={mostRecentSoldLotList} unit={'HKD'} />
            <Space />

            <ReportSold title={'The highest price in this artist’s sold lots history'} list={highestPriceSoldLotList} />
            <Space />

            <ReportIssue recentIssueList={recentIssueList} />
          </div>
        </Wrap>
      </Section>
    </ReportLayout>
  );
};

const ReportLayout = styled.div`
  background: #fbf7f1;

  .report__header {
    border-bottom: 3px solid #eee4d6;
    padding-bottom: 5px;
    margin-bottom: 1.5em;

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }

  .report__content {
    padding: 3.5em 0;
    border-top: 1px solid #000;
    @media screen and (max-width: 768px) {
      padding: 1.5em 0;
    }
  }

  h2 {
    font-size: 2.5rem;
    line-height: 1.3em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-left: 10px;

      img {
        vertical-align: top;
        height: 1.75rem;
      }
    }

    @media screen and (max-width: 1200px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

export default Report;
