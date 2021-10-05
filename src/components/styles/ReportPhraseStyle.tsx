import styled from "styled-components";
import { Form as Unform } from '@unform/web';

const ReportPhraseStyle = styled(Unform)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20em;


    input{

        width: 45vw;
        height: 5vh;
        margin-top: 1em;

        border: none;
        border-radius: 2rem;

        text-align: center;
        background-color: white;
        
    }

`;

export default ReportPhraseStyle