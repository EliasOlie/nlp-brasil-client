import PhraseStyle from './styles/PhraseWrapper'

interface IShowPhrase {
    isHidden: boolean
    phrase: string | undefined
}

export default function ShowPhrase(props:IShowPhrase){
	let isHidden = props.isHidden
	if (isHidden) {
        if (props.phrase === undefined) {
            return(
                <PhraseStyle message={"Processando ..."}/>
            )
        }else{
            return(
                <PhraseStyle message={props.phrase}/>
            )
        }
    }
	return(
		<></>
	)
}