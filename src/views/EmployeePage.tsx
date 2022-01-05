import styled from "styled-components";

import { Title } from "../components/dumb/Title";
import { Tabs } from "../components/dumb/Tabs";
import { Select } from "../components/dumb/Select";
import { FC, useState } from "react";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 111px auto 23px;
    max-width: 1110px;
`;

const workPlace = ['All', 'Mostovaya', 'Bogutskogo', 'DNT', 'Gaspadarchaya', 'Bogdanovicha' ];
const departments = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const EmployeePage: FC = () => {
    const [currentWorkPlace, setCurrentWorkPlace] = useState(workPlace[0]);
    const [currentSelectDep, setCurrentSelectDep] = useState('Choose department');

    console.log('select----->', currentSelectDep);
    console.log('tab ----->', currentWorkPlace);


    return (
        <StyledWrapper>
            <Title>List of employees</Title>
            <Tabs tabs={workPlace} activeTab={currentWorkPlace} onChange={setCurrentWorkPlace} />
            <Select currentSelect={currentSelectDep} departments={departments} onChange={setCurrentSelectDep} />
        </StyledWrapper>
    )
}