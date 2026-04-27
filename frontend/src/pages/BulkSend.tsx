
import { startSession } from "../services/startSession";   

export default function BulkSend(){

    const handleStartSession = () => {
        const sessionName = (document.getElementById("sessionName") as HTMLInputElement).value;
        startSession({name:sessionName});
    }

    return(
        <div>
            <h1>Bulk Send</h1>
            <input id="sessionName" type="text" placeholder="Nome da Sessão" />
            <br />
            <button onClick={handleStartSession}>Iniciar Sessão</button>
            <br />

            
        </div>
    )

}
