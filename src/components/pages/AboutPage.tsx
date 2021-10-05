import IPage from "../../interfaces/IPage";
import Navbar from "../Navbar";
import AboutPageStyle from "../styles/aboutPageStyle";

const AboutPage:React.FC<IPage> = () => {
    return(
        <>
            <Navbar/>
            <AboutPageStyle>
                <div className="text">
                    Este projeto ainda está em desenvolvimento! Portanto espere alguns errinhos.<br/>
                    Para mais informações de como a frase é processada e caso queira contríbuir
                    no projeto só acessar o <a href="https://github.com/EliasOlie/NLP-Brasil">repo</a> do backend (o backend é em python) <br/>
                    Em breve teremos processamento de entidades textuais e um avanço significativo no projeto em geral
                    
                </div>
            </AboutPageStyle>
        </>
    )
    
};

export default AboutPage