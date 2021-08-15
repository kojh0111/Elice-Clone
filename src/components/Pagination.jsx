import styled, { css } from "styled-components";
import Arrow from "../icons/Arrow.jsx";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
`;

const ArrowWrapper = styled.button`
  margin: ${(props) =>
    props.flip ? "0 0 40px 15px !important" : "0 15px 40px 0"};

  ${(props) =>
    props.flip &&
    css`
      transform: scaleX(-1);
    `}

  svg {
    display: block;
  }
`;

const PageNum = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #5e5f61;
  padding: 4px 5px;
  margin-bottom: 40px;
  background-color: transparent;
  + button {
    margin-left: 8px;
  }
  ${(props) =>
    props.active &&
    css`
      color: #f9fafc;
      background: #524fa1;
      border-radius: 4px;
    `}
`;

const MAX_PAGE_COUNT = 5;

const getPaginationArray = (currentPage, total) => {
  const resultList = [currentPage];

  let idx = 1;
  while (resultList.length < Math.min(MAX_PAGE_COUNT, total)) {
    if (currentPage - idx > -1) resultList.unshift(currentPage - idx);
    if (currentPage + idx < total) resultList.push(currentPage + idx);
    idx++;
  }
  return resultList;
};

Pagination.defaultProps = {
  currPage: 0,
  pageCount: 5,
  onClickPage: () => {},
};

export default function Pagination({ currPage, pageCount, onClickPage }) {
  return (
    <PageContainer>
      <ArrowWrapper
        onClick={() => currPage > 0 && onClickPage(currPage - 1)}
        disabled={currPage <= 0}
      >
        <Arrow />
      </ArrowWrapper>

      {getPaginationArray(currPage, pageCount).map((page) => {
        return (
          <PageNum
            onClick={() => onClickPage(page)}
            key={`page-button-${page}`}
            active={page === currPage}
          >
            {page + 1}
          </PageNum>
        );
      })}

      <ArrowWrapper
        flip
        onClick={() => currPage < pageCount - 1 && onClickPage(currPage + 1)}
        disabled={currPage >= pageCount - 1}
      >
        <Arrow />
      </ArrowWrapper>
    </PageContainer>
  );
}
