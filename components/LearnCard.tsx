import styled from "styled-components";

type Props = {
    title: string;
    body: string;
    image: IImage;
    className?: string;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font: ${({theme}) => theme.typography.heading3};
        color: ${({theme}) => theme.palette.text.primary};
    }

    p {
        font: ${({ theme }) => theme.typography.p2 };
        color: ${({ theme }) => theme.palette.text.secondary};
        margin-bottom: 35px;
    }

    img {
        max-height: 627px;
        width: auto;
        object-fit: contain;
    }
`;

const LearnCard = ({
    className,
    body,
    image,
    title
}: Props) => (
    <Container className={className}>
        <h3>{title}</h3>
        <p>{body}</p>
        <img alt={image.altText} src={image.src}/>
    </Container>
);

export default LearnCard;
