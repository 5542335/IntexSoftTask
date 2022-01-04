import { Title } from "../components/dumb/Title";
import { Tabs } from "../components/dumb/Tabs";

export const EmployeePage = () => {

const fakeDataStreets = ['All', 'Mostovaya', 'Bogutskogo', 'DNT', 'Gaspadarchaya', 'Bogdanovicha' ];

    return (
        <>
            <Title>List of employees</Title>
            <Tabs tabs={fakeDataStreets} />
        </>
    )
}