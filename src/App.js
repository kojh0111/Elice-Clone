import { useState } from "react";
import styled from "styled-components";
import CourseCard from "./components/CourseCard";
import TrackCard from "./components/TrackCard";
import Tab from "./components/Tab";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1232px;
  width: 90vw;
  height: 100vh;
  margin: auto;
  padding-top: 100px;
`;

export default function App() {
  const [currTab, setCurrTab] = useState("트랙");

  const handleClickTab = (tab) => {
    setCurrTab(tab);
  };
  return (
    <Container>
      <Tab currTab={currTab} onClick={handleClickTab} />
      {currTab === "트랙" ? <CourseCard /> : <TrackCard />}
    </Container>
  );
}
