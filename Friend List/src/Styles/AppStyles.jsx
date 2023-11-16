import styled from "styled-components";

const AppStyles = styled.div`
    position: relative;
    padding: 18rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #aeaeff;
    z-index: 5;


    img{
        position: absolute;
        height: 35rem;
        left: 1rem;
        top: 0rem;
        z-index: -1;
        transform:rotate(-20deg) ;
    }
   
`   
export default AppStyles;