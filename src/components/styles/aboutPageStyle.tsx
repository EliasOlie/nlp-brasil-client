import styled from "styled-components";
import COLORS from "./Colors";

const AboutPageStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .text{
        margin-top: 5%;
        color: #${COLORS.YELLOW}
    }
    .text a{
        font-size: 1em;
    }

`;

export default AboutPageStyle