import React from "react";
import BigTitle from "./components/BigTitle";
import NormalText from "./components/NormalText";
import Span from "./components/Span";
import Button from "./components/Button";
import { clearGreen, clearTitle } from "./styles/colors";
import Title from "./components/Title";
import ListElement from "./components/ListElement";
import List from "./components/List";
import InnerSection from "./components/InnerSection";
import StyledPicture from "./components/StyledPicture";
import Wrapper from "./components/Wrapper";
import Img from "./components/Img";
import Section from "./components/Section";
import GatsbyWrapper from "./components/GatsbyWrapper";
import Tabs from "./components/Tabs";

const App = () => {
    return (
        <>
            <main>
                <Section>
                    <NormalText color={clearGreen}>Hi, my name is</NormalText>
                    <BigTitle color={clearTitle}>Brittany Chiang</BigTitle>
                    <BigTitle>I build things for the web.</BigTitle>
                    <NormalText>
                        I’m a software engineer specializing in building (and
                        occasionally designing) exceptional digital experiences.
                        Currently, I’m focused on building accessible,
                        human-centered products at <Span>Upstatement</Span>.
                    </NormalText>
                    <Button>Check out my course !</Button>
                </Section>
                <Section maxWidth="900px">
                    <Title color={clearTitle}>
                        <Span>01.</Span> About Me
                    </Title>
                    <InnerSection>
                        <div>
                            <NormalText>
                                Hello! My name is Brittany and I enjoy creating
                                things that live on the internet. My interest in
                                web development started back in 2012 when I
                                decided to try editing custom Tumblr themes —
                                turns out hacking together a custom reblog
                                button taught me a lot about HTML & CSS!
                            </NormalText>
                            <NormalText>
                                Fast-forward to today, and I’ve had the
                                privilege of working at{" "}
                                <Span>an advertising agency</Span>,{" "}
                                <Span>a start-up</Span>,{" "}
                                <Span>a huge corporation</Span>, and{" "}
                                <Span>a student-led design studio</Span>. My
                                main focus these days is building accessible,
                                inclusive products and digital experiences at{" "}
                                <Span>Upstatement</Span> for a variety of
                                clients.
                            </NormalText>
                            <NormalText>
                                I also recently <Span>launched a course</Span>{" "}
                                that covers everything you need to build a web
                                app with the Spotify API using Node & React.
                            </NormalText>
                            <NormalText>
                                Here are a few technologies I’ve been working
                                with recently:
                            </NormalText>
                            <List>
                                <ListElement>Javascript</ListElement>
                                <ListElement>TypeScript</ListElement>
                                <ListElement>React</ListElement>
                                <ListElement>Eleventy</ListElement>
                                <ListElement>Node.js</ListElement>
                                <ListElement>WordPress</ListElement>
                            </List>
                        </div>
                        <StyledPicture>
                            <Wrapper>
                                <GatsbyWrapper>
                                    <Img src="/me.jpg" alt="" />
                                </GatsbyWrapper>
                            </Wrapper>
                        </StyledPicture>
                    </InnerSection>
                </Section>
                <Section maxWidth="700px">
                    <Title color={clearTitle}>
                        <Span>02.</Span> Where I've worked
                    </Title>
                    <InnerSection>
                        <Tabs tabs={["tab 1", "tab 2", "tab 3"]}>
                            <button></button>
                        </Tabs>
                    </InnerSection>
                </Section>
            </main>
        </>
    );
};

export default App;
