import styled from "styled-components";
import COLORS from "./Colors";

const NlStyle = styled.nav`
    display: flex;
    flex-direction: row;
    background-color: inherit;
    position: absolute;
    
    :last-child{
        margin-left: 89vw;
    }
    ul{
        display: flex;
        padding: 1rem 0;
        background-color: inherit;

    }

    li{
        background-color: inherit;
        list-style: none;

    }
    a{
        text-decoration: none;
        background-color: #${COLORS.LIGHTGREEN};
    }
`;

export default NlStyle