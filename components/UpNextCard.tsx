//#region imports
import styled from 'styled-components';

//#endregion

//#region Types
type Link = {
    linkText: string;
    href: string;
}

type Props = {
    index: number;
    eventName: string;
    description: string;
    links: Link[]
    className?: string;
    img: string;
}

//#endregion

//#region Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Link = styled.a`
    font: ${({ theme }) => theme.typography.button };
    color: ${({ theme }) => theme.palette.interactive.default };
    text-transform: uppercase;
    text-decoration: none;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 178px;
    margin-right: 145px;

    h2 {
        color: ${({ theme }) => theme.palette.text.subdued};
        font: 600 111px Montserrat;
        padding-bottom: 0px;
        margin-bottom: 50px;
        margin-top: 0px;
        padding-top: 0px;
    }

    h3 {
        font: ${({ theme }) => theme.typography.heading3};
        color: ${({ theme }) => theme.palette.text.primary};
        margin-top: 0px;
    }

    p {
        color: ${({ theme }) => theme.palette.text.primary};
        font: ${({ theme }) => theme.typography.p2};
    }

    ${LinkContainer} {
        margin-top: 50px;
    }
`;

const Image = styled.img``;

const Index = styled.div``;

const Title = styled.div``;



//#endregion

const UpNextCard = ({
    description,
    eventName,
    index,
    links,
    img,
    className
}: Props) => {
    return (
        <Container className={className}>
            <InfoContainer>
                <h2>{`0${index}`.slice(-2)}</h2>
                <h3>{eventName}</h3>
                <p>{description}</p>
                <LinkContainer>
                    {links.map((link) => (<Link href={link.href}>{link.linkText}</Link>))}
                </LinkContainer>
            </InfoContainer>
            <Image src={img}/>
        </Container>
    )
}

export default UpNextCard;
