import styled from 'styled-components';

export const Sidebar = styled.div`

    margin: 0;
    padding: 0;
    width: 260px;
    background-color: #3f4a59;
    position: fixed;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    a {
        display: block;
        color: rgb(209, 209, 209);
        font-size: 15px;
        padding: 14px;
        line-height: 30px;
        text-decoration: none;
        
    }

    i {
        font-size: 18px;
        padding: 0 20px;
    }


    a.active {
        background-color: #3b4655;
        color: rgb(209, 209, 209);
        font-size: 16px;
        text-transform: uppercase;
        line-height: 30px;
        padding: 14px 23px;

    }

    a:hover:not(.active) {
        background-color: #3b4655;
        color: white;
    }

`;

export const Content = styled.div`
    margin-left: 260px;
    height: 600px;

`;

export const Logo = styled.div`
    background-color: #3b4655;
    min-height: 60px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 6px solid #3f4a59;

    h2{
        color: #fff;
    }
   
`;

export const LogoImg = styled.img`
    width: 130px;
    height: auto;

`;

export const Search = styled.input`
    width: 185px;
    margin-bottom: 6px;
    box-sizing: border-box;
    padding: 8px 18px;
    border: none;
    border-radius: 5px 0px 0px 5px;
    color: rgb(209, 209, 209);
    background-color: #333e4e;

    &::placeholder { 
        color: rgb(209, 209, 209);
        opacity: 1; 
    }

    &:focus {
        outline: none;
    }
`;

export const ButtonSearch = styled.button`
    width: 53px;
    margin-bottom: 6px;
    padding: 8px 10px;
    border: none;
    border-radius: 0px 5px 5px 0px;
    color: rgb(209, 209, 209);
    background-color: #333e4e;
    text-align: center;

    i {
        font-size: 11px;
    }

`;

export const Form = styled.form`
    display: inline-block;
    margin: 0px 10px;
`;




