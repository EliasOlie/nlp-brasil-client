import styled from "styled-components";
import COLORS from "./Colors";


const PhraseStyle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 25vw;
    height: 5vh;

    background-color: white;

    border-radius: 1rem; 

    color: #${COLORS.YELLOW};
    font-weight: 600;
`;

function PhraseComponent(props:any) {
    return(
        <PhraseStyle>{props.message}</PhraseStyle>
    )
};

export default PhraseComponent