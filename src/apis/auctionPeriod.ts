export const AUCTION_PERIOD_API_PATH = '/aimme/api/v1/auction-period';

export interface AuctionPeriodApiParam {
  artistSeq?: string;
  auctionCode?: string;
  locationCode?: string;
}

export interface AuctionPeriodApiResponse {
  saleYmdFrom: string;
  saleYmdTo: string;
}
