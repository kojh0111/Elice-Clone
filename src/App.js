import styled from "styled-components";
import CourseCard from "./components/CourseCard";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default function App() {
  return (
    <Container>
      <CourseCard />
      <CourseCard isFree={true} />
    </Container>
  );
}
