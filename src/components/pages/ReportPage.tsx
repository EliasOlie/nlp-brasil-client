import Navbar from "../Navbar";
import ReportForm from "../ReportForm";
import { H2WithStyle } from "../styles/H2WithStyle";

const ReportPage:React.FC<any> = props => {
    return(
        <>
            <Navbar/>
            <H2WithStyle>Obrigado por contribuir!<br/>Sinta-se livre para colocar seu nome no comentário, junto com uma descrição do porque a frase está incorreta.</H2WithStyle>
            <ReportForm phrase={props.location.state}/>
        </>
    )
    
};

export default ReportPage