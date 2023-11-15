import styled from "styled-components";

const AppStyles = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #b8b8ff;
    z-index: 5;


    img{
        position: absolute;
        height: 500px;
        left: 3rem;
        z-index: -1;
        transform:rotate(15deg) ;
    }
   
`   
export default AppStyles;