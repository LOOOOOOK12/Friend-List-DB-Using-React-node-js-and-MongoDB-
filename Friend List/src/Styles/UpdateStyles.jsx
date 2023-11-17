import styled from "styled-components";

const UpdateStyles = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        color: #f7f7f7;
        background: #7878ff;
        padding: 3rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .update-Button{
        color: white;
        background: #00a400;
        padding: .5rem 1rem;
        margin-right: .5rem;
        border: 2px white none;
        border-radius: .4rem;
        transition: ease .2s;
    }

    .update-Button:hover{
        background: #006700;
    }

    .cancel-Button{
        color: white;
        background: #ff2525;
        padding: .5rem 1rem;
        margin-right: .5rem;
        border: 2px white none;
        border-radius: .4rem;
        transition: ease .2s;
    }

    .cancel-Button:hover{
        background: #d10000;
    }

    input{
        outline: none;
        color: white;
        background: transparent;
        border: 2px white solid;
        padding: 0.3rem;

    }

    label{
        display: flex;
        flex-direction: column;
    }
`   
export default UpdateStyles;