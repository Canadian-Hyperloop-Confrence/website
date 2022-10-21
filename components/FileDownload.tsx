import styled from 'styled-components';
import Typography from './Typography';

const Container = styled.div`
// TODO: Get this color into the style
    background-color: #1F1F1F;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    max-width: 659px;
    height: 118px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FileNameAndSecondaryTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const LeftItems = styled.div``;

const RightItems = styled.div``;

const FileIcon = styled.div``;

const FileSize = styled.div``;

const FileDownloadIcon = styled.div``;

const FileName = styled(Typography)``;

const SecondaryText = styled(Typography)``;

type Props = {
    fileName: string;
    downloadLink: string;
    secondaryText: string;
    size: {
        value: number;
        unit: 'mb' | 'kb'
    },
    className?: string;
};

const FileDownload = ({}: Props) => {
    return (
        <Container>
            <LeftItems>
                <FileIcon/>
                <FileNameAndSecondaryTextContainer>

                </FileNameAndSecondaryTextContainer>
            </LeftItems>
            <RightItems>
                <FileSize></FileSize>
                <FileDownloadIcon/>
            </RightItems>
        </Container>
    );
};

export default FileDownload;
