import styled from 'styled-components';
import UnstyledUpNextCard from '../components/UpNextCard';
import DividerLine from '../components/DividerLine';
import Teams from '../data/Teams';
import ULearnCard from '../components/LearnCard';
import GutterWrapper from '../components/GutterWrapper';

const UpNextCard = styled(UnstyledUpNextCard)`
    margin-bottom: 123px;
`;

const HeroImage = styled.img.attrs({
    src: "images/Hero-Image.png"
})`
    height: auto;
    width: 100%;
    object-fit: contain;
    z-index: -1;
`;

const HeroText = styled.h1`
    font: ${({ theme }): string => theme.typography.title};
    position: absolute;
    bottom: 0;
    align-self: center;
    color: ${({ theme }): string => theme.palette.text.onDark};
    width: 100%;
    text-align: center;
    margin-bottom: 194px;
`;

const Container = styled.div``;

const HeroContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    position: relative;
`;

const ByLineContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.dark};
    padding-left: 275px;
    padding-top: 63px;
    padding-bottom: 62px;

    h2 {
        font: ${({ theme }) => theme.typography.heading1};
        color: ${({ theme }) => theme.palette.text.onDark};

        text-transform: uppercase;
        margin-top: 0px;
        padding-top: 0px;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }

    p {
        font: ${({ theme }) => theme.typography.p2};
        color: ${({ theme }) => theme.palette.text.onDark};

        margin-top: 15px;
        width: 440px;
    }
`;

const UpNextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;

    margin-bottom: 120px;

    h1 {
        text-transform: uppercase;
        color: ${({ theme }) => theme.palette.text.primary};
        margin-bottom: 124px;
        margin-top: 125px;
        font: ${({ theme }) => theme.typography.heading1};
    }
`;

const TeamsImages = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    img {
        max-width: 243px;
        height: auto;
        max-height: 153px;
        object-fit: contain;
        align-self: center;

        margin-right: 106px;
    }
`;

const SectionContainer = styled.div`
    margin-top: 125px;
    margin-bottom: 125px;

    h1 {
        font: ${({ theme }) => theme.typography.heading1};
        color: ${({ theme }) => theme.palette.text.primary};
        text-transform: uppercase;
        max-width: 450px;
        margin-bottom: 15px;
    }

    p {
        font: ${({ theme }) => theme.typography.p2 };
        color: ${({ theme }) => theme.palette.text.secondary};
        max-width: 440px;

    }
`;

const UpdatesImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`;

const LearnCard = styled(ULearnCard)`
    width: 48%;
`;

const LearnContainer = styled.div`
    margin-top: 125px;
    margin-bottom: 125px;
    display: flex;
    justify-content: space-between;
`;

const LandingPage = () => {
    return (
        <Container>
            <HeroContainer>
                <HeroImage></HeroImage>
                <HeroText>HYPERLOOP GLOBAL</HeroText>
            </HeroContainer>
            <ByLineContainer>
                <h2>
                    Innovation<br/>
                    From Competition
                </h2>
                <p>
                    We want to change the way the world thinks about transportation. Our mission is to help push the boundaries of transportation to create a sustainable future.
                </p>
            </ByLineContainer>
            <GutterWrapper>
                <UpNextContainer>
                    <h1>Up Next</h1>
                    <UpNextCard
                        eventName='2023 Conference'
                        description='Compete with teams around the world in various categories.'
                        index={1}
                        links={[
                            // {
                            //     href: "",
                            //     linkText: "Sign Up"
                            // },
                            // {
                            //     href: "",
                            //     linkText: "Learn More"
                            // },
                        ]}
                        img={"images/2023 Conference Photo.png"} />
                    <UpNextCard
                        eventName='Virtual Showcase'
                        description='Join our international showcase, and share designs in front of industry professionals.'
                        index={2}
                        links={[
                            // {
                            //     href: "",
                            //     linkText: "Learn More"
                            // },
                        ]}
                        img={"images/2023 Virtual Showcase Photo.png"} />
                </UpNextContainer>
            </GutterWrapper>
            <GutterWrapper>
                <DividerLine dividerHeader='Teams'/>
            </GutterWrapper>
            <GutterWrapper>
                <SectionContainer>
                    <h1>Bringing the World Together</h1>
                    <p>We are proud to have teams from all around the world. We believe that this diversity is key to driving innovation and pushing the boundaries of what is possible.</p>
                    <TeamsImages>
                        {
                            Object.values(Teams).map((team) => {
                                return (<img key={team.altText} alt={team.altText} src={team.src} />)
                            })
                        }
                    </TeamsImages>
                </SectionContainer>
            </GutterWrapper>
            <GutterWrapper>
                <DividerLine dividerHeader='Learn'/>
            </GutterWrapper>
            <GutterWrapper>
                <LearnContainer>
                        <LearnCard
                            title='What is Hyperloop?'
                            body='Hyperloop is a high-speed transportation system that uses pods or capsules to transport people or goods through low-pressure tubes. It was first proposed by Elon Musk in 2013 as a faster and more efficient alternative to current modes of transportation such as trains and planes.'
                            image={{
                                src: '/images/What is HYperloop Image.png',
                                altText: 'What is Hyperloop'
                            }}
                        />
                        <LearnCard
                            title='Bridging the Gap'
                            body='Hyperloop Global is bringing together talented student teams and professionals within the hyperloop community to advance the technologies and fill the gap left by SpaceX. By coming together and leveraging collective expertise and resources, we want to continue moving the technology forward.'
                            image={{
                                src: '/images/Bridging the Gap Image.png',
                                altText: 'Bridging the Gap'
                            }}
                        />
                </LearnContainer>
            </GutterWrapper>
            <GutterWrapper>
                <DividerLine dividerHeader='Updates' />
            </GutterWrapper>
            <GutterWrapper>
                <SectionContainer>
                    <h1>
                        Stay in the Loop
                    </h1>
                    <p>
                        Hyperloop Blogs, Videos, Interviews and more. Find out more about Hyperloop Global, and what we are doing to make the future faster.
                    </p>
                    <UpdatesImage alt="Hyperloop Talks" src="/images/Image_ Hyperloop Talks.png" />
                </SectionContainer>
            </GutterWrapper>
        </Container>
    );
};

export default LandingPage;
