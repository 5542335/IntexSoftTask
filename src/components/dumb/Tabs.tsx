import { FC } from "react";
import styled from "styled-components";

export const StyledTab = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 130%;

    letter-spacing: 0.02em;
    font-feature-settings: 'pnum' on, 'lnum' on, 'salt' on, 'ss03' on, 'ss09' on, 'liga' off;

    color: #404851;
`;

interface StyledLineProps {
    border?: string;
    borderRadius?: string;
    width?: string;
    background?: string;
    height?: string;
    margin?: string;
    position?: string;
    ZIndex?: number;
    bottom?: string;
  }

  interface StyledTabContainerProps {
    margin?: string;
  }

export const StyledLine = styled.div<StyledLineProps>`
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    width: ${props => props.width};
    background: ${props => props.background};
    height: ${props => props.height};
    margin: ${props => props.margin};
    position: ${props => props.position};
    z-index: ${props => props.ZIndex};
    bottom: ${props => props.bottom};
`;

export const StyledTabsContainer = styled.div`
    display: flex;
`;

export const StyledTabContainer = styled.div<StyledTabContainerProps>`
    margin: ${props => props.margin};
`;


interface TabsProps {
    tabs: string[];
  }

export const Tabs: FC<TabsProps> = ({tabs}: TabsProps) => {
    return (
        <>
            <StyledTabsContainer>
                {tabs.map((tab) => {
                return  (
                    <StyledTabContainer margin="32px 16px 0 16px">
                        <StyledTab>{tab}</StyledTab>
                        <StyledLine background="#3386D9" borderRadius="2px 2px 0px 0px" height="4px" margin="8px 0 0 0" ZIndex={1}/>
                    </StyledTabContainer>
                )
                })}
            </StyledTabsContainer>
            <StyledLine width="1110px" border="1px solid #DEECF9" position="relative" bottom="2px" ZIndex={0}/>
        </>
    )
}