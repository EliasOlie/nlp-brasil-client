import styled from "styled-components";
import COLORS from "./Colors";

const BtnWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;

    .navbar-nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }

    button{
        cursor: pointer;

        margin-right: 1em;
        width: 15vw;
        height: 5vh;

        border: none;
        border-radius: 1rem;

        box-shadow: 3px;

        font-weight: 600;
        font-size: 1vw;


        color: #${COLORS.YELLOW};
        background-color: #${COLORS.LIGHTGREEN};
    }
    

    .Detalhes{
        margin-top: 1em;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #${COLORS.YELLOW};
        font-weight: 600;

        box-shadow: 3px;

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