import styled from "styled-components";
import CourseCard from "./components/CourseCard";

const Container = styled.div`
  background-color: #f0f1f3;
`;

export default function App() {
  return (
    <Container>
      <CourseCard />
    </Container>
  );
}
