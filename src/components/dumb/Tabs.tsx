import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

export const StyledTabsContainer = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #DEECF9;
`;

interface StyledTabProps {
    marginTop?: string;
    borderBottom?: string;
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

    position: relative;
    list-style: none;
    padding: 0 16px 8px;
    border-radius: 2px 2px 0px 0px;
    margin-bottom: -1px;
    cursor: pointer;
    border-bottom: ${props => props.isActive ? '4px solid #3386D9' : ''};
    color: ${props => props.isActive ? '#3386D9' : '#404851'};
`;

interface TabsProps {
    tabs: string[];
    activeTab: string;
    onChange: Dispatch<SetStateAction<string>>;
  }

export const Tabs: FC<TabsProps> = ({tabs, activeTab, onChange}: TabsProps) => {
    return (
        <>
            <StyledTabsContainer>
                {tabs.map((tab) => {
                    return  (
                        <StyledTab
                            key={tab}
                            onClick={() => onChange(tab)}
                            isActive={activeTab === tab}
                        >
                            {tab}
                        </StyledTab>
                    )
                })}
            </StyledTabsContainer>
        </>
    )
}