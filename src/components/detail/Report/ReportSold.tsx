import React from 'react';
import styled from 'styled-components';
import SaleItem from './SaleItem';

const ReportSold = ({ title, list, unit }: { title: any; list: any; unit?: any }) => {
  return (
    <ReportSoldLayout>
      <div className={'report__header'}>
        <h3>{title}</h3>
      </div>

      <div className="list">
        {list?.map(sale => (
          <SaleItem key={sale.seq} sale={sale} unit={unit} list={true} />
        ))}
      </div>
    </ReportSoldLayout>
  );
};
const ReportSoldLayout = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    @media screen and (max-width: 768px) {
      margin: 0 -5px;
    }
  }
`;

export default ReportSold;
