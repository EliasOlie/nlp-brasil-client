import styled from "styled-components";
import COLORS from "./Colors";

const NotFoundPageStyle = styled.div`
    position: absolute;
    top: 30%;
    left: 37%;

    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 10em;
        color: #${COLORS.YELLOW};
        font-weight: 600;
    }
    p{
        color: #${COLORS.YELLOW};
        font-size: 1.5em;
    }
    a{
        color: #${COLORS.YELLOW};
        font-size: .7em;
        font-weight: 600;
    }
`;

export default NotFoundPageStyle