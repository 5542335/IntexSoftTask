import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

export const StyledTabsContainer = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

interface StyledTabProps {
    marginTop?: string;
    borderBottom?: string;
    color?: string;
  }

export const StyledTab = styled.li<StyledTabProps>`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;

    position: relative;
    list-style: none;
    padding: 0 16px 8px;
    border-radius: 2px 2px 0px 0px;
    margin-bottom: -2px;
    user-select: none;
    cursor: pointer;
    margin-top: ${props => props.marginTop};
    border-bottom: ${props => props.borderBottom};
    color: ${props => props.color};
`;

export const StyledLine = styled.div`
    width: 1110px;
    border: 1px solid #DEECF9;
    margin: 0 auto;
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
                            marginTop="32px"
                            onClick={() => onChange(tab)}
                            borderBottom={activeTab === tab ? '4px solid #3386D9' : ''}
                            color={activeTab === tab ? '#3386D9' : '#404851'}
                        >
                            {tab}
                        </StyledTab>
                    )
                })}
            </StyledTabsContainer>
            <StyledLine/>
        </>
    )
}