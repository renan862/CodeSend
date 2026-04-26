import whatsappService from "../services/whatsappService.js";

async function createClients(req, res){
    const {name} = req.body;
    try{
        await whatsappService.createClient(name);
        res.json({ status: 'Session started successfully' }); 

    }catch(error){
        console.error('Error starting session:', error);
        res.status(500).json({ error: 'Error starting session' });

    }

}

export default createClients;