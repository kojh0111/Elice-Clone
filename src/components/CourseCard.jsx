import * as Card from "./Card";
import Chart from "../icons/chart.jsx";
import Computer from "../icons/computer.jsx";
import Calendar from "../icons/calendar.jsx";

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
    <Card.Container>
      <Card.Tags>
        {tags.map((val, idx) => {
          return (
            <>
              <span>{val}</span>
              {idx < tags.length - 1 ? <span> &#183; </span> : null}
            </>
          );
        })}
      </Card.Tags>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Features>
        <Card.Feature>
          <Chart />
          <Card.Text>난이도: {level}</Card.Text>
        </Card.Feature>
        <Card.Feature>
          <Computer />
          <Card.Text>수업: {classFormat}</Card.Text>
        </Card.Feature>
        <Card.Feature>
          <Calendar />
          <Card.Text>기간: {duration}</Card.Text>
        </Card.Feature>
      </Card.Features>
      <Card.Languages>
        {languages.map((lang, idx) => {
          return (
            <Card.Language key={`${lang}-${idx}-${title}`} lang={lang}>
              {lang}
            </Card.Language>
          );
        })}
      </Card.Languages>
      <Card.BorderBar />
      <Card.Image src={imgUrl} />
      {isFree ? (
        <Card.CostFree>무료</Card.CostFree>
      ) : (
        <Card.CostWrapper>
          <Card.CurrentCost>{currentCost.toLocaleString()}원</Card.CurrentCost>
          <Card.OriginalCost>
            {originalCost.toLocaleString()}원
          </Card.OriginalCost>
          <Card.DiscountPercentile>
            {discountPercentile}%
          </Card.DiscountPercentile>
        </Card.CostWrapper>
      )}
    </Card.Container>
  );
}
