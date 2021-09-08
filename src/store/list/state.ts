import { ListApiRequestParam, ListApiResponse } from '../../apis/list';

export interface State extends ListApiRequestParam {
  fetchedData?: ListApiResponse;
}

export const initState: State = {
  pageNo: 1,
  perPage: 20,
  sortType: 1,
};
