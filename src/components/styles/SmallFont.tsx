import styled from "styled-components";
import COLORS from "./Colors";

export const SmallFont = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1em;

    font-size: 1em;
    color: #${COLORS.YELLOW};
    font-weight: 600;
    
    cursor: pointer;
    text-decoration: underline;
   

`;