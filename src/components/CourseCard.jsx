import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  height: 360px;
  padding: 30px 20px;
  border-radius: 10px;
  background-color: #ffffff;
`;

const Tags = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #5c59a8;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: #151618;
  margin: 15px 0 20px 0;
`;
CourseCard.defaultProps = {
  tags: ["태그1", "태그2"],
  title: "샘플 타이틀",
  description: "프로그래밍이 처음이신가요? 파이썬으로 쉽고 재밌게 시작해봐요",
};

export default function CourseCard({ tags, title, description }) {
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
    </Container>
  );
}
