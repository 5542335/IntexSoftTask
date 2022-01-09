import styled from "styled-components";

import { Title } from "../components/dumb/Title";
import { Tabs } from "../components/dumb/Tabs";
import { SearchBar } from "../components/smart/SearchBar";
import { Select } from "../components/dumb/Select";
import { StyledTabsContainer } from "../components/dumb/Tabs";
import { FC, useState } from "react";

const StyledSearchAndSelect = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 76px;
    background-color: #F5F9FD;
    border-radius: 8px;
`;

const StyledPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 111px auto 23px;
    max-width: 1110px;

    ${StyledTabsContainer} {
        margin-top: 32px;
    }
    ${StyledSearchAndSelect} {
        margin-top: 16px;
    }
`;

const workPlace = ['All', 'Mostovaya', 'Bogutskogo', 'DNT', 'Gaspadarchaya', 'Bogdanovicha' ];
const departments = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const EmployeePage: FC = () => {
    const [currentWorkPlace, setCurrentWorkPlace] = useState(workPlace[0]);
    const [currentSelectDep, setCurrentSelectDep] = useState('Choose department');

    return (
        <StyledPageWrapper>
            <Title>List of employees</Title>
            <Tabs tabs={workPlace} activeTab={currentWorkPlace} onChange={setCurrentWorkPlace} />
            <StyledSearchAndSelect>
                <SearchBar />
                <Select currentSelect={currentSelectDep} items={departments} onChange={setCurrentSelectDep} />
            </StyledSearchAndSelect>
        </StyledPageWrapper>
    )
}