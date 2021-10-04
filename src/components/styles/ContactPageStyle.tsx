import styled from "styled-components";
import COLORS from "./Colors";

const ContactPageStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3em;

    .text{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-top: 1em;
        font-size: 1.7em;
        font-weight: 600;
        margin-bottom: 1em;

    }
    .text p {
        color: #${COLORS.YELLOW};

    }
    img{
        border: 3px solid white;
        border-radius: 50%;
        width: 15em;
    }
`;

export default ContactPageStyle