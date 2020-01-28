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

export const Button = styled.a`
    margin: 10px 10px;
    display: inline-block;
    padding: 5px 20px;
    background: transparent;
    border: 2px solid #7AC29A;
    font-size: 14px;
    color: #7AC29A;
    border-radius: 30px;
    text-decoration: none;

    &:hover{
        background: #7AC29A;
        color: #fff;
    }
`;

export const Form = styled.form`
    margin: 5px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

export const InputItem = styled.div`
    flex: 1 0 400px;
    padding: 0 10px ;

    p {
        font-size: 14px;
        margin: 8px 0;
    }

    select {
        width: 49%;
        box-sizing: border-box;
        padding: 8px 14px;
        border: thin solid #bebebe;
        border-radius: 5px;
        color: #a3a3a3;
    }
`;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 8px 18px;
    border: thin solid #bebebe;
    border-radius: 5px;
    color: #757575;
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


export const ButtonBlue = styled.a`
    margin: 10px 10px;
    display: inline-block;
    padding: 5px 20px;
    background: transparent;
    border: 2px solid #68B3C8;
    font-size: 14px;
    color: #68B3C8;
    border-radius: 30px;
    text-decoration: none;

    &:hover{
        background: #68B3C8;
        color: #fff;
    }

    i {
        margin: 0 10px;
    }
`;





