import { RootState } from './reducers';

const selectors = {
  detailState: ({ detail }: RootState) => {
    return detail;
  },
  listState: ({ list }: RootState) => {
    return list;
  },
};

export default selectors;
