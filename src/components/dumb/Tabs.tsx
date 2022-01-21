import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

interface ActiveTabProps {
  isActive?: boolean;
}

export const StyledTabs = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTab = styled.li<ActiveTabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 130%;
  padding: 0 16px 12px;
  color: #404851;
  list-style: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  ${({ isActive }) =>
    isActive &&
    `
    color: #3386D9;
    :after {
      content: '';
      width: 100%;
      height: 4px;
      background: #3386D9;
      border-radius: 2px 2px 0 0;
      position: absolute;
      bottom: -1px;
    }
  `}
`;

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Tabs: FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  const handleClickTab = (tab: string) => () => {
    onChange(tab);
  };

  return (
    <StyledTabs>
      {tabs.map((tab) => {
        return (
          <StyledTab key={tab} onClick={handleClickTab(tab)} isActive={activeTab === tab}>
            {tab}
          </StyledTab>
        );
      })}
    </StyledTabs>
  );
};
