import { useState, useEffect } from "react";
import styled from "styled-components";
import CourseCard from "./components/CourseCard";
import TrackCard from "./components/TrackCard";
import Tab from "./components/Tab";
import axios from "axios";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1424px;
  width: 90vw;
  height: 100vh;
  margin: auto;
  padding-top: 100px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.large ? "repeat(3, 446px)" : "repeat(4, 344px)"};
  grid-column-gap: ${(props) => (props.large ? 43 : 16)}px;
  grid-row-gap: ${(props) => (props.large ? 32 : 24)}px;
`;

export default function App() {
  const [currTab, setCurrTab] = useState("트랙");
  const [currPage, setCurrPage] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [totalCardCount, setTotalCardCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const handleClickTab = (tab) => {
    if (tab !== currTab) {
      setCurrPage(0);
      setSearchValue("");
    }
    setCurrTab(tab);
  };

  const handleChangeSearch = (val) => {
    setSearchValue(val);
  };

  useEffect(() => {
    (async function () {
      if (currTab === "트랙") {
        const API_END_POINT = "https://api-beta.elicer.io:6664/org/academy/";
        const offset = currPage * 6;
        const filterConditions = searchValue
          ? `&filter_conditions=${JSON.stringify({ title: searchValue })}`
          : "";

        const trackUrl = `${API_END_POINT}track/list/?offset=${offset}&count=6${filterConditions}`;

        const response = await axios.get(trackUrl);
        setTotalCardCount(response.data.track_count);
        setCardData(response.data.tracks);
      }

      if (currTab === "과목") {
        const API_END_POINT = "https://api-beta.elicer.io:6664/org/academy/";
        const offset = currPage * 8;
        const filterConditions = searchValue
          ? `&filter_conditions=${JSON.stringify({ title: searchValue })}`
          : "";

        const courseUrl = `${API_END_POINT}course/list/?offset=${offset}&count=8${filterConditions}`;

        const response = await axios.get(courseUrl);
        setTotalCardCount(response.data.course_count);
        setCardData(response.data.courses);
      }
    })();
  }, [currTab, currPage, searchValue]);

  return (
    <Container>
      <Tab currTab={currTab} onClick={handleClickTab} />
      <SearchBar
        value={searchValue}
        onChange={handleChangeSearch}
        count={totalCardCount}
      />
      {currTab === "트랙" ? (
        <CardContainer large>
          {cardData.map((track, i) => (
            <TrackCard title={track.title} key={`track-card-${i}`} />
          ))}
        </CardContainer>
      ) : (
        <CardContainer>
          {cardData.map((course, i) => (
            <CourseCard title={course.title} key={`course-card-${i}`} />
          ))}
        </CardContainer>
      )}
      <Pagination
        currPage={currPage}
        pageCount={Math.ceil(totalCardCount / (currTab === "트랙" ? 6 : 8))}
        onClickPage={setCurrPage}
      />
    </Container>
  );
}
