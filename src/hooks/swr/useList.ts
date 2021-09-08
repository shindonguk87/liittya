import useSWR from 'swr';
import { LIST_API_PATH, ListApiRequestParam, ListApiResponse } from '../../apis/list';
import { fetcher } from '../../apis/_axios';
import { useDispatch } from 'react-redux';
import { setFetchedData } from '../../store/list/actions';

const useList = ({ apiParams, initialData }: { apiParams: ListApiRequestParam; initialData?: ListApiResponse }) => {
  const dispatch = useDispatch();
  const result = useSWR(
    [
      LIST_API_PATH,
      apiParams.pageNo,
      apiParams.perPage,
      apiParams.sortType,
      apiParams.artistSeq,
      apiParams.auctionType,
      apiParams.locationType,
      apiParams.startDate,
      apiParams.endDate,
      apiParams.minPrice,
      apiParams.maxPrice,
      apiParams.isIncludeUnsold,
      apiParams.isViewCurrentCurrency,
    ],
    (
      url,
      pageNo,
      perPage,
      sortType,
      artistSeq,
      auctionType,
      locationType,
      startDate,
      endDate,
      minPrice,
      maxPrice,
      isIncludeUnsold,
      isViewCurrentCurrency
    ) =>
      fetcher<ListApiResponse>(url, {
        pageNo,
        perPage,
        sortType,
        artistSeq,
        auctionType,
        locationType,
        startDate,
        endDate,
        minPrice,
        maxPrice,
        isIncludeUnsold,
        isViewCurrentCurrency,
      }),
    {
      initialData,
    }
  );

  if (result.data) {
    dispatch(setFetchedData({ fetchedData: result.data }));
  }

  return result;
};

export default useList;
