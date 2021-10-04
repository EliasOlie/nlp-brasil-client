import IPhrase from "../interfaces/IPhrase"
import Drop from './Dropdown'

interface IShow {
    isHidden: boolean
    phrase: IPhrase | undefined
}

export default function Show(props:IShow){
	let isHidden = props.isHidden
	const phrase = props.phrase
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