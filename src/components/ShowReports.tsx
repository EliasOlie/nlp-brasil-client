import IPhraseReported from "../interfaces/IPhraseReported";
import IReport from "../interfaces/IReport";
import PhraseReportStyle from "./styles/PhraseReportStyle";

function ReportError(props:IPhraseReported){
	return(
		<p><a href={`/stack/review/${props.phrase}`}>Algo errado?</a></p>
	);
}

export default function ShowReport(props:IReport){
	let isHidden = props.isHidden
	if (isHidden) {
		return(
	
            <PhraseReportStyle>
                <ReportError phrase={props.phrase}/>
            </PhraseReportStyle>


		)
	}
	return(
		<></>
	)
}