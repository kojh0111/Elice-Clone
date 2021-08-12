import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 18px 72px 60px 1fr 64px;
  width: 296px;
  height: 407px;
  padding: 28px 24px 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.02);
`;

const Tags = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #5d59ad;
`;

const Title = styled.h5`
  font-size: 20px;
  font-weight: 800;
  color: #151618;
  margin: 15px 0 20px 0;
`;

const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  line-height: 20px;
`;

const BorderBar = styled.div`
  position: absolute;
  height: 1px;
  bottom: 84px;
  left: 0;
  right: 0;
  background-color: #ececec;
`;

const CostFree = styled.div`
  margin: auto 0 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #34ab53;
`;

const CostWrapper = styled.div`
  margin: auto 0 12px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const CurrentCost = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #151618;
`;

const OriginalCost = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #a8a9ab;
  margin-left: 8px;
`;

const DiscountPercentile = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #f94669;
  margin-left: auto;
`;

CourseCard.defaultProps = {
  tags: ["태그1", "태그2"],
  title: "샘플 타이틀",
  description: "프로그래밍이 처음이신가요? 파이썬으로 쉽고 재밌게 시작해봐요",
  isFree: false,
  currentCost: 42000,
  originalCost: 57000,
  discountPercentile: 35,
};

export default function CourseCard({
  tags,
  title,
  description,
  isFree,
  currentCost,
  originalCost,
  discountPercentile,
}) {
  return (
    <Container>
      <Tags>
        {tags.map((val, idx) => {
          return (
            <>
              <span>{val}</span>
              {idx < tags.length - 1 ? <span> &#183; </span> : null}
            </>
          );
        })}
      </Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>tags</div>
      <BorderBar />
      {isFree ? (
        <CostFree>무료</CostFree>
      ) : (
        <CostWrapper>
          <CurrentCost>{currentCost.toLocaleString()}원</CurrentCost>
          <OriginalCost>{originalCost.toLocaleString()}원</OriginalCost>
          <DiscountPercentile>{discountPercentile}%</DiscountPercentile>
        </CostWrapper>
      )}
    </Container>
  );
}
