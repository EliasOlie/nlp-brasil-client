import styled from "styled-components";
import COLORS from "./Colors";

const H1Style = styled.h1`
    color: #${COLORS.YELLOW};

    margin-top: 7rem;

    display: flex;
    justify-content: center;
`;

export default function H1WithStyle(props: any){
    return(
        <H1Style>{props.value}</H1Style>
    )

}
  
