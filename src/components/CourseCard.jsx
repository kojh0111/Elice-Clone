import styled from "styled-components";
import Chart from "../icons/chart.jsx";
import Computer from "../icons/computer.jsx";
import Calendar from "../icons/calendar.jsx";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 18px 72px 60px 1fr 1fr 64px;
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

const Image = styled.img`
  position: absolute;
  right: 24px;
  bottom: 208px;
  width: 56px;
  height: 56px;
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

const Features = styled.div`
  margin-top: auto;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  + div {
    margin-top: 8px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #7d7e80;
  margin-left: 8px;
`;

const Languages = styled.div`
  display: flex;
  margin-top: 64px;
  margin-bottom: 15px;
`;

const Language = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => getColorByLang(props.lang)};
  position: relative;
  padding: 4px 6px;

  + p {
    margin-left: 8px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => getColorByLang(props.lang)};
    opacity: 0.2;
    border-radius: 2px;
  }
`;

function getColorByLang(lang) {
  if (lang === "파이썬") return "#477DB1";
  if (lang === "HTML/CSS") return "#DE561D";
  if (lang === "자바스크립트") return "#F3CB39";
}

CourseCard.defaultProps = {
  tags: ["태그1", "태그2"],
  title: "샘플 타이틀",
  description: "프로그래밍이 처음이신가요? 파이썬으로 쉽고 재밌게 시작해봐요.",
  isFree: false,
  currentCost: 42000,
  originalCost: 57000,
  discountPercentile: 35,
  level: "중급",
  classFormat: "온라인",
  duration: "무제한",
  imgUrl: "rabbit.png",
  languages: ["파이썬", "HTML/CSS", "자바스크립트"],
};

export default function CourseCard({
  tags,
  title,
  description,
  isFree,
  currentCost,
  originalCost,
  discountPercentile,
  level,
  classFormat,
  duration,
  imgUrl,
  languages,
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
      <Features>
        <Feature>
          <Chart />
          <Text>난이도:{level}</Text>
        </Feature>
        <Feature>
          <Computer />
          <Text>수업:{classFormat}</Text>
        </Feature>
        <Feature>
          <Calendar />
          <Text>기간:{duration}</Text>
        </Feature>
      </Features>
      <Languages>
        {languages.map((lang, idx) => {
          return (
            <Language key={`${lang}-${idx}-${title}`} lang={lang}>
              {lang}
            </Language>
          );
        })}
      </Languages>
      <BorderBar />
      <Image src={imgUrl} />
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
