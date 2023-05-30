import styled from 'styled-components';

type Props = {
    dividerHeader: string;
};

const Container = styled.div`
    width: 100%;

    hr {
        color: ${({ theme }) => theme.palette.dividerLine };
    }

    p {
        font: ${({ theme }) => theme.typography.caption};
        color: ${({ theme }) => theme.palette.dividerLine };
    }
`;

const DividerLine = ({
    dividerHeader
}: Props) => {
    return (
        <Container>
            <p>{dividerHeader}</p>
            <hr/>
        </Container>
    );
};

export default DividerLine;
