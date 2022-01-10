import {
  Dispatch, FC, SetStateAction,
} from 'react';
import styled from 'styled-components';

interface StyledUnderlineProps {
    isActive?: boolean;
}

export const StyledUnderline = styled.div<StyledUnderlineProps>`
    background-color: #3386D9;
    height: 4px;
    border-radius: 2px 2px 0 0;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
`;

const StyledTabContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`;

export const StyledTabsContainer = styled.ul`
    display: flex;
    margin: 0;
    border-bottom: 1px solid #DEECF9;
    overflow-x: scroll;
    padding-inline-start: 0;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    @media (max-width: 480px) {
      box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
    }
    ${StyledUnderline} {
      margin-top: 8px;
    }
`;

interface StyledTabProps {
    marginTop?: string;
    color?: string;
    isActive?: boolean;
  }

export const StyledTab = styled.li<StyledTabProps>`
    font-family: Lato, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0 16px 0;
    cursor: pointer;
    user-select: none;
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
      {tabs.map((tab) => (
        <StyledTabContainer>
          <StyledTab
            key={tab}
            onClick={handleClickTab(tab)}
            isActive={activeTab === tab}
          >
            {tab}
          </StyledTab>
          <StyledUnderline isActive={activeTab === tab} />
        </StyledTabContainer>
      ))}
    </StyledTabsContainer>
  );
};
