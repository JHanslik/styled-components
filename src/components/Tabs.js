import React, { useState } from "react";
import styled from "styled-components";

const TabList = styled.div`
    display: flex;
    flex-direction: column;
`;
const Tab = styled.div`
    cursor: pointer;
    color: ${(props) => (props.active ? "#333" : "#999")};
`;
// const TabPanel = styled.div`
//     display: ${(props) => (props.active ? "block" : "none")};
// `;

const Tabs = ({ tabs, children }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div>
            <TabList>
                {tabs.map((tab) => (
                    <Tab
                        active={tab === activeTab}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </Tab>
                ))}
            </TabList>
            {/* {children.map((child, index) => (
                <TabPanel active={tabs[index] === activeTab}>{child}</TabPanel>
            ))} */}
        </div>
    );
};

export default Tabs;
