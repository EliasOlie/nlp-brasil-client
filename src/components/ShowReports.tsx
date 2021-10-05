import { useHistory } from "react-router-dom";
import IPhraseReported from "../interfaces/IPhraseReported";
import IReport from "../interfaces/IReport";
import PhraseReportStyle from "./styles/PhraseReportStyle";
import { SmallFont } from "./styles/SmallFont";

function ReportError(props:IPhraseReported){
	const history = useHistory()
	
	const routeChange = () => {
		let path = "/stack/review"
		history.push(path, props.phrase)
	}
	
	return(
		<div className="prereport">
			<SmallFont onClick={() => routeChange()}>Algum problema?</SmallFont>
		</div>
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