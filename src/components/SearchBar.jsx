import styled from "styled-components";
import MagnifyingGlass from "../icons/MagnifyingGlass.jsx";

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 12px;

  svg {
    position: absolute;
    top: 15px;
    left: 12px;
  }
`;

const Input = styled.input`
  padding: 11px 11px 11px 39px;
  border: 1px solid #c9cacc;
  border-radius: 4px;
  height: 46px;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: #7d7e80;
`;

const CountBox = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #151618;
  box-shadow: inset 0px -1px 0px #e1e2e4;
  padding: 12px 0;
  margin-bottom: 12px;
`;

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

SearchBar.defaultProps = {
  value: "",
  onChange: () => {},
  count: 0,
};

export default function SearchBar({ value, onChange, count }) {
  const debouncedOnChange = debounce(onChange, 500);

  return (
    <SearchContainer>
      <MagnifyingGlass />
      <Input
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <CountBox>전체 {count}개</CountBox>
    </SearchContainer>
  );
}
