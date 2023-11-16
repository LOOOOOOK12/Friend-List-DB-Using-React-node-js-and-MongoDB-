import styled from "styled-components"

const CreateStyles = styled.div`

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        margin-bottom: 2rem;
    }

    .Label{
        display: flex;
        flex-direction: column;
    }

    .Label label{
        margin-bottom: .5rem;
    }

    input{
        outline: none;
        color: white;
        background: transparent;
        border: 2px white solid;
        padding: 0.3rem;

    }

    .Submit{
        color: #f8f8f8;
        padding: .5rem 2rem;
        background: #00a400;
        border-radius: .4rem;
        border: transparent;
        transition: ease .2s;
    }

    .Submit:hover{
        background: #007700;
    }

    
`
export default CreateStyles;