import { FC } from 'react';
import styled, { css } from 'styled-components';

export const StyledTabs = styled.ul`
  display: flex;
  position: relative;
  overflow-x: scroll;
  padding: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTab = styled.li<{ isActive?: boolean }>`
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
  ${(props) =>
    props.isActive &&
    css`
      color: #3386d9;
      :after {
        content: '';
        width: 100%;
        height: 4px;
        background: #3386d9;
        border-radius: 2px 2px 0 0;
        position: absolute;
        bottom: 0;
        z-index: 1;
      }
    `}
`;

const StyledUnderline = styled.div`
  height: 1px;
  background: #deecf9;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const StyledTabsWrapper = styled.div`
  position: relative;
`;

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export const Tabs: FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  const handleClickTab = (tab: string) => () => {
    onChange(tab);
  };

  return (
    <StyledTabsWrapper>
      <StyledTabs>
        {tabs.map((tab) => {
          return (
            <StyledTab key={tab} onClick={handleClickTab(tab)} isActive={activeTab === tab}>
              {tab}
            </StyledTab>
          );
        })}
      </StyledTabs>
      <StyledUnderline />
    </StyledTabsWrapper>
  );
};
