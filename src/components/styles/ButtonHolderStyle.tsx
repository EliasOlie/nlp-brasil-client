import styled from "styled-components";
import COLORS from "./Colors";

const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;


    button{
        cursor: pointer;

        margin-right: 1rem;
        width: 15vw;
        height: 5vh;

        border: none;
        border-radius: 1rem;

        box-shadow: 3px;

        font-weight: 600;

        color: #${COLORS.YELLOW};
        background-color: #${COLORS.LIGHTGREEN};
    }
    

    .Detalhes{
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