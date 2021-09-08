const getRegionName = str => {
  switch (str) {
    case 'NewYork':
      return 'newyork';
    case 'London':
      return 'london';
    case 'HongKong':
      return 'hongkong';
    case 'Paris':
      return 'paris';
    case 'Amsterdam':
      return 'amsterdam';
    case 'Milano':
      return 'milano';
    case 'Geneva':
      return 'geneva';
    case 'Zurich':
      return 'zurich';
    case 'Shanghai':
      return 'shanghai';
    case 'Dubai':
      return 'dubai';
    case 'Doha':
      return 'doha';
    default:
      return 'online';
  }
};

export default getRegionName;
