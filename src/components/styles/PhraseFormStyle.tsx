import styled from "styled-components";
import { Form as Unform } from '@unform/web';

const PhraseFormStyle = styled(Unform)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    input{

        width: 45vw;
        height: 5vh;
        margin-top: 8vh;

        border: none;
        border-radius: 2rem;

        text-align: center;
        background-color: white;
        
    }

`;

export default PhraseFormStyle