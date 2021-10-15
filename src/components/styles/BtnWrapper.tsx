import styled from "styled-components";
import COLORS from "./Colors";

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .navbar-nav{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content:center;
    }
    .Detalhes{
        margin-top: 1em;
        color: #${COLORS.YELLOW};
        font-weight: 600;
        box-shadow: 3px;
        justify-self: center;
        width: 15vw;
        height: 5vh;
        border-radius: 1rem;        
        background-color: #${COLORS.LIGHTGREEN};
    }

    img{
        display: flex;
        width: .5rem;
        margin-left: .5rem;

        background-color: #${COLORS.LIGHTGREEN};

    }

    a{
        background-color: #${COLORS.LIGHTGREEN};
    }
`;

export default BtnWrapper