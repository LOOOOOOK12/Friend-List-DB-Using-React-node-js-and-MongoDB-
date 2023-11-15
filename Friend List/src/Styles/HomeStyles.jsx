import styled from "styled-components"

const HomeStyles = styled.div`
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #9191ff;
    padding: 2rem;
    border-radius: 1.5rem;

    h1{
        margin-bottom: 2rem;
    }  

    table{
        text-align: left;
        width: 100%;
    }

    .Edit{
        color: white;
        background: #018501;
        padding: .5rem 1rem;
        margin-right: 1rem;
        border: 2px white none;
        border-radius: .4rem;
        transition: ease .2s;
    }

    .Edit:hover{
        background: #006700;
    }

    .Delete{
        color: white;
        background: #ff2626;
        padding: .5rem 1rem;
        margin-right: 1rem;
        border: 2px white none;
        border-radius: .4rem;
        transition: ease .2s;
    }

    .Delete:hover{
        background: #d20000;
    }
`
export default HomeStyles;