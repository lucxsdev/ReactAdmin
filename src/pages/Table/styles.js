import styled from 'styled-components';

export const Container = styled.div`
    max-width: 980px;
    margin: 30px auto;
    padding: 10px 5px;
    background: #ffffff;
    border-radius: 7px;

    i{
        margin: 0 10px;
    }
 
`;

export const Head = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom-width: 0;
    font-size: 1em;
    font-weight: 300;
    border-bottom: thin solid #bebebe;
`;

export const GridItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: left;
    padding: 0 20px;
    border-bottom-width: 0;
    font-size: 0.8em;
    font-weight: 300;
    border-bottom: thin solid #bebebe;

    span {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    span > a {
        display: inline-block;
        text-decoration: none;
        padding: 0 10px;
        font-size: 1.25em;
    }

    &:hover {
        background: #f1f1f1;
    }
`;

export const Item = styled.div`
     width: 100px;
`;


export const Table = styled.table`
    padding: 10px;
    width: 100%;
    font-size: 0.8em;
    font-weight: 300;
    border-collapse: collapse; 
    justify-content: center;
`;

export const Thead = styled.thead`
    tr:hover {
        background: #fff;
    }
`;

export const Tr = styled.tr`
    text-align: left;
    border-bottom: 1pt solid #bebebe;

    span > a {
        display: inline-block;
        text-decoration: none;
        font-size: 1.25em;
    }

    &:hover {
        background: #f1f1f1;
    }
`;

export const Th = styled.th`
    padding: 10px 5px;
    font-size: 1.1em;
   
`;

export const Tbody = styled.tbody`
    
`;

export const Td = styled.td`
    padding: 10px 5px;
    border-bottom: 1pt solid #bebebe;
`;







