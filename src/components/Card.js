import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 18px 72px 60px 1fr 1fr 64px;
  width: 296px;
  height: 407px;
  padding: 28px 24px 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.02);

  ${(props) =>
    props.large &&
    css`
      grid-template-rows: 56px 60px 64px 1fr 64px;
      width: 398px;
      border-radius: 12px;
    `}
`;

export const Tags = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #5d59ad;
`;

export const Title = styled.h5`
  font-size: ${(props) => (props.large ? 24 : 20)}px;
  font-weight: 800;
  color: #151618;
  margin: ${(props) => (props.large ? "auto 0 4px 0" : "15px 0 20px 0")};
`;

export const Description = styled.p`
  color: #5e5f61;
  font-size: ${(props) => (props.large ? 16 : 14)}px;
  line-height: 20px;
  margin-top: ${(props) => (props.large ? "auto" : 0)};
`;

export const BorderBar = styled.div`
  position: absolute;
  height: 1px;
  bottom: 84px;
  left: 0;
  right: 0;
  background-color: #ececec;
`;

export const Image = styled.img`
  position: absolute;
  right: 24px;
  bottom: 208px;
  width: 56px;
  height: 56px;
`;

export const CardIcon = styled.img`
  background-color: #524fa0;
  border-radius: 18px;
  width: 48px;
  height: 48px;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 24px;
`;

export const CostFree = styled.div`
  margin: auto 0 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #34ab53;
`;

export const CostWrapper = styled.div`
  margin: auto 0 12px;
  display: flex;
  align-items: flex-end;
`;

export const CurrentCost = styled.p`
  font-weight: bold;
  font-size: ${(props) => (props.large ? 19 : 16)}px;
  line-height: 23px;
  color: #151618;
`;

export const Installment = styled.p`
  font-size: 17px;
  line-height: 23px;
  color: #151618;
  margin-left: 3px;
`;

export const OriginalCost = styled.p`
  font-size: ${(props) => (props.large ? 16 : 14)}px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #a8a9ab;
  margin-left: 6px;
`;

export const DiscountPercentile = styled.p`
  font-weight: bold;
  font-size: ${(props) => (props.large ? 20 : 16)}px;
  line-height: 23px;
  color: #f94669;
  margin-left: auto;
`;

export const Features = styled.div`
  margin-top: auto;
  ${(props) =>
    props.large &&
    css`
      margin: auto 0;
    `}
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  + div {
    margin-top: 8px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: ${(props) => (props.large ? 14 : 12)}px;
  line-height: 22px;
  color: #7d7e80;
  margin-left: 8px;
`;

export const Languages = styled.div`
  display: flex;
  margin-top: 64px;
  margin-bottom: 15px;
`;

function getColorByLang(lang) {
  if (lang === "파이썬") return "#477DB1";
  if (lang === "HTML/CSS") return "#DE561D";
  if (lang === "자바스크립트") return "#F3CB39";
}

export const Language = styled.p`
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

export function Corner() {
  return (
    <OuterCorner>
      <div />
    </OuterCorner>
  );
}

const OuterCorner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background-color: white;
  box-shadow: inset 10px -10px 20px rgba(95, 95, 95, 0.1);
  border-radius: 0px 8px 0px 32px;

  > div {
    transition: all 200ms ease-in-out 0ms;
    position: absolute;
    width: 36px;
    height: 36px;
    left: 0;
    bottom: 0;
    background: #f4f4f4;
    box-shadow: inset 10px -10px 20px rgba(95, 95, 95, 0.07);
    border-radius: 0px 8px 0px 32px;
  }

  :hover > div {
    width: 52px;
    height: 52px;
    background-color: #524fa0;
  }
`;
