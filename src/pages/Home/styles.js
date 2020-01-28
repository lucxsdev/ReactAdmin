import styled from 'styled-components';

export const Container = styled.div`
    max-width: 980px;
    margin: 30px auto;
    padding: 10px 5px;
    background: #f0f3f7;
    border-radius: 7px;
    color: #3b4655;
    text-align: center;

    i{
        margin: 0 10px;
    }

    
`;


export const ButtonCircle = styled.a`
    height: 60px; 
    width: 60px; 
    margin: 18px;
    display: inline-block;
    background: #3b4655;
    font-size: 14px;
    color: #e6eaee;
    border-radius: 30px;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
         background: #36404e;
    }

    i {
        margin: 19px 10px;
        font-size: 1.6em;
    }
`;




