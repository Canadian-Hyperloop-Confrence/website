import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    width: 100%;
    padding-left: 0;
    li:nth-child(even) {
        background-color: #ECECEC;
    }
    li:nth-child(odd) {
        background-color: #54879D;
    }
    li {
        list-style-type: none;
        padding-left: 16px;
        padding-right: 16px;
        color: black;
    }
`;

type Props = {
    children: React.ReactNode;
};

const ListContainer = ({
    children,
}: Props) => {
    const content = children && React.Children.map(children, (child) => {
        return (<li>{child}</li>)
    })
    return (
        <List>
            {content}
        </List>
    );
};

export default ListContainer;
