import styled from 'styled-components';

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
        </Container>
    );
};

export default LandingPage;
