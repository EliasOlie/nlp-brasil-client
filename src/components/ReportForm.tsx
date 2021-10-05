import { FormHandles, SubmitHandler } from "@unform/core";
import { useRef, useState } from "react";
import api from '../config/API'
import Button from "./Button";
import Input from "./input";
import ShowStatus from "./ShowStatus";
import ReportPhraseStyle from "./styles/ReportPhraseStyle";

export default function ReportForm(props:any) {
	const formRef = useRef<FormHandles>(null)
    const [hidden, setHidden] = useState(false)
	const handleSubmit: SubmitHandler = async data => {
		await api.post(
			'/stack/review',
			data
		).then((Response) => {
            console.log(Response)        
		})
	
	}
	
	return(
		<>
            <ReportPhraseStyle ref={formRef} onSubmit={handleSubmit}>
                <Input name="phrase" placeholder="Frase" defaultValue={props.phrase} disabled={true}/>
                <Input name="comment" placeholder="Insira um comentário (opcional)"/>
                <Button type="submit" onClick={() => setHidden(!hidden)}>Enviar!</Button>
            </ReportPhraseStyle>
            <ShowStatus isHidden={hidden}/>
            
		</>
	);
}