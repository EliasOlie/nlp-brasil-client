import { FC } from 'react'
import IPage from '../../interfaces/IPage';
import PhraseForm from '../MyForm'
import HomePageStyle from '../styles/HomePageStyle';
import Navbar from '../Navbar';
import MainH1 from '../styles/H1WithStyle'

const HomePage:FC<IPage> = () => {
    return(
        <HomePageStyle>
            <Navbar/>
            <MainH1 value={"<NLP Brasil/>"}/> 
            <PhraseForm/>
        </HomePageStyle>
    )
    
};

export default HomePage