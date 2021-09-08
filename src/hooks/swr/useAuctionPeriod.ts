import useSWR from 'swr';
import { AuctionPeriodApiParam, AuctionPeriodApiResponse, AUCTION_PERIOD_API_PATH } from '../../apis/auctionPeriod';
import { fetcher } from '../../apis/_axios';

const useAuctionPeriod = (params?: { apiParams: AuctionPeriodApiParam }) => {
  const result = useSWR(
    [
      AUCTION_PERIOD_API_PATH,
      params?.apiParams?.artistSeq,
      params?.apiParams?.auctionCode,
      params?.apiParams?.locationCode,
    ],
    (url, artistSeq, auctionCode, locationCode) =>
      fetcher<AuctionPeriodApiResponse>(url, {
        artistSeq,
        auctionCode,
        locationCode,
      })
  );

  return result;
};

export default useAuctionPeriod;
