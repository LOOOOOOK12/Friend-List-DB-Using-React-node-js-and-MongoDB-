import styled from "styled-components"

const HomeStyles = styled.div`
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #7878ff;
    padding: 2rem;
    border-radius: 1.5rem;

    h1{
        margin-bottom: 1.3rem;
    }  

    p{
        margin-bottom: 1.5rem;
    }

    table{
        text-align: left;
        width: 100%;
    }

    .Edit{
        color: white;
        background: #00a400;
        padding: .5rem 1rem;
        margin-right: .5rem;
        border: 2px white none;
        border-radius: .4rem;
        transition: ease .2s;
    }

    .Edit:hover{
        background: #006700;
    }

    .Delete{
        color: white;
        background: #ff1f1f;
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