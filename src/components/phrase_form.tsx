import { useRef, useState } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import Input from './input'
import api from '../config/Axios_Conf'
import Drop from './Dropdown'
import IForm from '../interfaces/IFormPhrase'
import IPhrase from '../interfaces/IPhrase'
import PhraseFormStyle from './styles/PhraseFormStyle'
import PhraseStyle from './styles/PhraseWrapper'
import ButtonHolderStyle from './styles/ButtonHolderStyle'
import PhraseReportStyle from './styles/PhraseReportStyle'


function ReportError(props:any){
	return(
		<p><a href={`/stack/review/${props.phrase}`}>Algo errado?</a></p>
	);
}

function Show(props:any){
	let isHidden = props.isHidden
	const phrase:IPhrase = props.phrase
	if (isHidden) {
		return(
			<>	

				<Drop
					
					Polaridade={phrase?.Polaridade}
					Confianca ={phrase?.Confianca}
					NumeroPalavras ={phrase?.NumeroPalavras}
					PalavrasCon = {phrase?.PalavrasCon}
					PalavrasDesc ={phrase?.PalavrasDesc}
					Mensagem={phrase?.Mensagem}
									
				/>
				
			</>
		)
	}
	return(
		<></>
	)
};

function ShowPhrase(props:any){
	let isHidden = props.isHidden
	if (isHidden) {
		return(
			<>	

				<PhraseStyle message={props.phrase}/>
				
			</>
		)
	}
	return(
		<></>
	)
};

function ShowReport(props:any){
	let isHidden = props.isHidden
	if (isHidden) {
		return(
			<>	

				<ReportError phrase={props.Frase}/>

				
			</>
		)
	}
	return(
		<></>
	)
};

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
			<div className="form">
				<PhraseFormStyle ref={formRef} onSubmit={handleSubmit}>
					<Input name="phrase" placeholder="Frase"/>
				</PhraseFormStyle>
				<ButtonHolderStyle>
					<button type="submit" onClick={() => setHidden(!hidden)}>Enviar!</button>
					<Show isHidden={hidden} phrase={phrase}/>
				</ButtonHolderStyle>
				<PhraseReportStyle>
					<ShowPhrase isHidden={hidden} phrase={phrase?.Mensagem}/>
					<ShowReport isHidden={hidden} Frase={phrase?.Frase}/>
				</PhraseReportStyle>

			</div>

				
		</>
	);
}