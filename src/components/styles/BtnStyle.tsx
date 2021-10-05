import styled from "styled-components";
import COLORS from "./Colors";

const BtnStyle = styled.button`

    width: 15vw;
    height: 5vh;
    margin-top: 1em;

    border-radius: 1rem;
    border: none;

    color: #${COLORS.YELLOW};
    font-weight: 600;

    background-color: #${COLORS.LIGHTGREEN};
    cursor: pointer; 
`;

export default BtnStyle