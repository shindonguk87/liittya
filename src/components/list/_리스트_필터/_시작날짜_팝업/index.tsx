import React, { useEffect } from 'react';
import useAuctionPeriod from '../../../../hooks/swr/useAuctionPeriod';
import { setStartDateAction } from '../../../../store/list/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { State } from '../../../../store/list/state';
import selectors from '../../../../store/selectors';

const _시작날짜_팝업 = () => {
  const dispatch = useDispatch();
  const { artistSeq, auctionType, locationType } = useSelector<RootState, State>(selectors.listState);
  const { data: 날짜데이터 } = useAuctionPeriod({
    apiParams: {
      artistSeq,
      auctionCode: auctionType,
      locationCode: locationType,
    },
  });

  useEffect(() => {
    if (날짜데이터) {
      (window as any).$('#fromContainer').empty();
      const div = (window as any)
        .$('<input/>')
        .attr('id', 'from')
        .attr('value', 'From')
        .attr('readonly', 'true')
        .css('font-family', '"Helvetica Neue",arial,serif')
        .css('font-size', '16px')
        .css('line-height', '24px')
        .css('padding-right', '15px')
        .css('width', '62px')
        .css('height', '26px')
        .css('background-color', 'transparent')
        .css('border', '0')
        .css('font-weight', '300')
        .css('cursor', 'pointer');

      (window as any).$('#fromContainer').append(div);

      const saleYmdFrom = String(날짜데이터.saleYmdFrom);
      const saleYmdTo = String(날짜데이터.saleYmdTo);
      div
        .monthpicker({
          pattern: 'yyyy-mm',
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          finalYear: saleYmdTo.substring(0, 4),
          startYear: saleYmdFrom.substring(0, 4),
          top: 64,
        })
        .on('monthpicker-change-year', function (e, year) {
          restricMonth(saleYmdFrom, saleYmdTo, 'from', year);
        })
        .on('monthpicker-show', function () {
          restricMonth(
            saleYmdFrom,
            saleYmdTo,
            'from',
            (window as any).$((window as any).$('.mtz-monthpicker-year')[0]).val()
          );
        });

      (window as any).$('#from').on('change', function () {
        dispatch(
          setStartDateAction({
            startDate: (window as any).$('#from').val().split('-').toString().replaceAll(',', ''),
          })
        );
        (window as any).$('#from').val('From');
        (window as any).$('.vmDim').remove();
      });
    }
  }, [dispatch, 날짜데이터, artistSeq, auctionType, locationType]);

  return <></>;
};

export default _시작날짜_팝업;

function restricMonth(saleYmdFrom, saleYmdTo, val, target) {
  const fromYear = String(saleYmdFrom.substring(0, 4));
  const fromMonth = String(saleYmdFrom.substring(4, 6));

  const toYear = String(saleYmdTo.substring(0, 4));
  const toMonth = String(saleYmdTo.substring(4, 6));

  const disableMonths = [];
  const id = '#' + val;

  (window as any).$('.ui-state-disabled').removeClass('ui-state-disabled');
  (window as any).$(id).monthpicker('disableMonths', []);

  let targetMonth;
  if (val === 'to') {
    targetMonth = (window as any).$((window as any).$('[id^=monthpicker]')[1]).find('.mtz-monthpicker-month');
  } else {
    targetMonth = (window as any).$((window as any).$('[id^=monthpicker]')[0]).find('.mtz-monthpicker-month');
  }

  if (fromYear === toYear) {
    for (let i = 1; i < 13; i++) {
      if (Number(fromMonth) > i) {
        disableMonths.push(i);
        (window as any).$(targetMonth[i]).addClass('ui-state-disabled');
      }
      if (Number(toMonth) < i) {
        disableMonths.push(i);
        (window as any).$(targetMonth[i]).addClass('ui-state-disabled');
      }
    }
    (window as any).$(id).monthpicker('disableMonths', disableMonths);
  } else {
    for (let i = 1; i < 13; i++) {
      if (fromYear === target) {
        if (Number(fromMonth) > i) {
          disableMonths.push(i);
          (window as any).$(targetMonth[i]).addClass('ui-state-disabled');
        }
      }
      if (toYear === target) {
        if (Number(toMonth) < i) {
          disableMonths.push(i);
          (window as any).$(targetMonth[i]).addClass('ui-state-disabled');
        }
      }
    }
    (window as any).$(id).monthpicker('disableMonths', disableMonths);
  }
}
