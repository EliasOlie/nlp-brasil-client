import IShowStatus from "../interfaces/IShowStatus";
import { SmallFont } from "./styles/SmallFont";

export default function ShowStatus(props:IShowStatus){
    let isHidden = props.isHidden
    let hasError = props.error
    console.log(hasError+" Aqui deu isso")
    if (isHidden) {
        return (
            <SmallFont>Muito obrigado por contribuir!</SmallFont>
        )
      
    }
    return(
        <></>
    )
}