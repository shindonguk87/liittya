const 영어_월: { [key: number]: string } = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export const changeDate = (date: string) => {
  if (!date) {
    return '';
  }

  let nowDate;
  if (date.split('-')[1]) {
    nowDate = String(date.split('-')[0]) + date.split('-')[1];
  } else {
    nowDate = date;
  }

  nowDate = nowDate.substring(0, 4) + '-' + nowDate.substring(4, 6);
  const nowYear = nowDate.split('-')[0];
  const nowMonth = nowDate.split('-')[1];

  return `${영어_월[Number(nowMonth)]?.substring(0, 3)} ${nowYear}`;
};
