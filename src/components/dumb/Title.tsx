import styled from "styled-components";
import { FC, ReactChild, ReactElement } from "react";

export const StyledTitle = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    letter-spacing: 0.02em;
    font-feature-settings: 'ss09' on, 'liga' off;
    color: ${props => props.color};
`;

interface TitleProps {
    children: ReactChild;
}


export const Title: FC<TitleProps> = ({children}: TitleProps): ReactElement => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}