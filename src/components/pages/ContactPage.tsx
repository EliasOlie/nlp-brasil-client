import GitHubButton from 'react-github-btn'
import Navbar from "../Navbar";
import Eu from '../media/orewa.jpg'
import ContactPageStyle from '../styles/ContactPageStyle';
import IPage from '../../interfaces/IPage';

const ContactPage:React.FC<IPage> = () => {
    return(
        <>
            <Navbar/>
            <ContactPageStyle>
                <img src={Eu} alt="" />
                <div className="text">

                    <p>Desenvolvedor apaixonado por Python e Typescript</p>
                    <p>Em breve mais funcionalidades e projetos!</p>
                    <p>Acompanhe pra ficar por dentro!</p>
               
                </div>
                    <GitHubButton href="https://github.com/EliasOlie" data-size="large" aria-label="Follow @EliasOlie on GitHub">Follow @EliasOlie</GitHubButton>
            
            </ContactPageStyle>
            
        </>
    )
    
};

export default ContactPage