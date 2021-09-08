import React from 'react';
import styled from 'styled-components';

const ReportIssue = ({ recentIssueList }) => {
  // seq
  // date
  // content
  return (
    <ReportIssueLayout>
      <div className={'report__header'}>
        <h3>Recent Issues</h3>
      </div>

      <ul className={'issueList'}>
        {recentIssueList?.map(issue => {
          return (
            <li key={issue.seq}>
              <div className="date">{issue.date}</div>
              <div className="content font-garamond">{issue.content}</div>
              <div className={'name'}>{issue.pressname || ''}</div>
              <div className={'action'}>
                <a href={issue.pressurl || ''} target={'_blank'} rel="noopener noreferrer">
                  <img src="/assets/images/icon-action.png" alt="" />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </ReportIssueLayout>
  );
};

const ReportIssueLayout = styled.div`
  .issueList {
    .date {
      width: 200px;
      flex: none;
      line-height: 1.5em;
    }
    .content {
      flex: 1;
      font-size: 1.5rem;
    }
    .name {
      width: 150px;
      flex: none;
      text-align: center;
    }
    .action {
      width: 100px;
      flex: none;
      text-align: center;
    }
    @media screen and (max-width: 1200px) {
      .date {
        width: 120px;
      }
      .content {
        flex: 1;
      }
      .name {
        width: 100px;
      }
      .action {
        width: 70px;
      }
    }
    @media screen and (max-width: 768px) {
      .date {
        width: 70px;
        text-align: center;
        padding-right: 10px;
      }
      .content {
        flex: 1;
      }
      .name {
        width: 100px;
        padding: 0 10px;
      }
      .action {
        width: 40px;
        img {
          height: 15px;
        }
      }
    }
    li {
      border-bottom: 1px solid #eee4d6;
      display: flex;
      height: 120px;
      align-items: center;
      @media screen and (max-width: 768px) {
        height: auto;
        padding: 10px 0;
      }
    }
  }
`;

export default ReportIssue;
