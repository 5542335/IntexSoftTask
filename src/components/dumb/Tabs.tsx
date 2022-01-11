import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

interface ActiveTabProps {
  isActive?: boolean;
}

interface StyledTabProps extends ActiveTabProps {
  marginTop?: string;
  color?: string;
}

export const StyledTabsContainer = styled.ul`
  display: flex;
  margin: 0;
  border-bottom: 1px solid #deecf9;
  overflow-x: scroll;
  position: relative;
  padding-inline-start: 0;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 481px) {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  }
`;

const StyledTab = styled.li<StyledTabProps>`
  font-family: Lato, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0.02em;

  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0 16px 12px;
  cursor: pointer;
  user-select: none;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    `
    ::after {
      content: '';
      width: 100%;
      height: 4px;
      background: #3386D9;
      border-radius: 2px 2px 0 0;
      position: absolute;
      bottom: -1px;
    }
  `}
  color: ${(props) => (props.isActive ? '#3386D9' : '#404851')};
`;

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Tabs: FC<TabsProps> = ({ tabs, activeTab, onChange }: TabsProps) => {
  const handleClickTab = (tab: string) => () => {
    onChange(tab);
  };

  return (
    <StyledTabsContainer>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <StyledTab key={tab} onClick={handleClickTab(tab)} isActive={isActive}>
            {tab}
          </StyledTab>
        );
      })}
    </StyledTabsContainer>
  );
};
