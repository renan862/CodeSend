//import e from "express"; // Verificar se irá precisar disso
import whatsappService from "../services/whatsappService.js"

async function send(req, res){
    const {sessionName, contacts, message} = req.body;
    try{
        for(const number of contacts){
            await whatsappService.sendMessage(sessionName,number, message);
            await new Promise(r => setTimeout(r, 4000)); // Delay de 4 segundos entre o envio de cada mensagem. Mas mudarei para esta informção para puxar do bd 
        }
        
        res.json({ status: 'Messages sent successfully' });
    }catch(error){
        console.error('Error sending messages:', error);
        res.status(500).json({ error: 'Error sending messages' });
    }
}
export { send };