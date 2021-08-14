import styled, { css } from "styled-components";

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e2e4;
  width: 100%;
  margin-bottom: 16px;
`;

const EachTab = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #151618;
  padding: 8px;

  + p {
    margin-left: 16px;
  }

  ${(props) =>
    props.active &&
    css`
      color: #524fa1;
      font-weight: bold;
      background: rgba(230, 230, 230, 0.0001);
      box-shadow: inset 0px -4px 0px #524fa1;
    `}
`;

Tab.defaultProps = {
  currTab: "트랙",
  onClick: () => {},
};

const tabs = ["트랙", "과목"];

export default function Tab({ currTab, onClick }) {
  return (
    <TabContainer>
      {tabs.map((tab, i) => {
        return (
          <EachTab
            key={`${tab}-${i}`}
            active={currTab === tab}
            onClick={() => onClick(tab)}
          >
            {tab}
          </EachTab>
        );
      })}
    </TabContainer>
  );
}
