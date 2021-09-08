export const DETAIL_API_PATH = '/aimme/api/v2/detail';

export const getDetailApiPath = (id: string) => {
  return `${DETAIL_API_PATH}/${id}`;
};

export interface DetailApiRequest {
  id: string;
}

export interface DetailApiResponse {
  lotImages: any;
  lotArtistName: any;
  lotArtistBirth: any;
  lotTitle: any;
  aimmeEstimatedHigh: any;
  aimmeEstimatedLow: any;
  aimmeGrowth: any;
  hammerPrice: any;
  currentPrice: any;
  auctionCurrency: any;
  auctionEstimatedHigh: any;
  auctionEstimatedLow: any;
  lotNumber: any;
  auctionTitle: any;

  brushStroke: any;
  provenance: any;
  artworkCategory: any;
  artworkTimeline: any;
  artworkTimelineText: any;

  historycalPerfomanceWorks: any;

  // charts...
  averageAnnualSales: any;
  priceFluctuationFactor: any;
  secondaryMarketShareByValue: any;
  secondaryMarketShareByVolume: any;
  tradeVolumesSector: any;
  marketShareSector: any;

  // Description
  exhibited: any;
  essay: any;
  literature: any;

  // report
  artist: any;
  artistInfo: any;
  topMediums: any;
  averageSize: any;
  relatedArtists: any;
  mostPopularAuction: any;
  mostPopularRegion: any;
  soldInAuction: any;
  unsoldInAuction: any;
  priceBidding: any;
  lastDecadeAuctionInfo: any;
  mostRecentSoldLotList: any;
  highestPriceSoldLotList: any;
  recentIssueList: any;
  artistMarketRisk: any;
}
