import Navbar from "../Navbar";
import NotFoundPageStyle from "../styles/NotFoundPageStyle";

const NotFoundPage:React.FC = () => {
    return(
        <>
            <Navbar/>
            <NotFoundPageStyle className="content">
                <h1>404!</h1>
                <p>A página que você procura não existe</p>
                <a href="/">Voltar para home</a>
            </NotFoundPageStyle>
        </>
    )
    
};

export default NotFoundPage