import { useRef, useState } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import Input from './input'
import api from '../config/API'
import IForm from '../interfaces/IFormPhrase'
import IPhrase from '../interfaces/IPhrase'
import PhraseFormStyle from './styles/PhraseFormStyle'
import ButtonHolderStyle from './styles/BtnWrapper'
import PhraseReportStyle from './styles/PhraseReportStyle'
import Button from './Button'
import ShowReport from './ShowReports'
import Show from './ShowStatistics'
import Wrapper from './styles/formWrapper'
import ShowPhrase from './ShowPhrase'
import "dotenv/config";


export default function MyForm() {
	const [phrase, setPhrase] = useState<IPhrase>()
	const [hidden, setHidden] = useState(false)
	const formRef = useRef<FormHandles>(null)
	const handleSubmit: SubmitHandler<IForm> = async data => {
		await api.post(
			'/processing',
			data
		).then((Response) => {
		
			setPhrase(Response.data.data);
		})
	
	}
	
	return(
		<>
			<Wrapper>
				<PhraseFormStyle ref={formRef} onSubmit={handleSubmit}>
					<Input name="phrase" placeholder="Frase"/>
						<Button type="submit" onClick={() => {
							if (hidden) {
								setHidden(hidden)
							}else{
								setHidden(!hidden)
							}
						}}>Enviar!</Button>
					<ButtonHolderStyle>
						<Show isHidden={hidden} phrase={phrase}/>
					</ButtonHolderStyle>
				</PhraseFormStyle>
				<PhraseReportStyle>
					<ShowPhrase isHidden={hidden} phrase={phrase?.Mensagem}/>
					<ShowReport isHidden={hidden} phrase={phrase?.Frase}/>
				</PhraseReportStyle>

			</Wrapper>

				
		</>
	);
}