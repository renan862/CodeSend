import wppconnect from '@wppconnect-team/wppconnect';

let clients = {};

async function createClient(name){
    try {
    const session = await wppconnect.create({
        session: name,
        puppeteerOptions: {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
    })
    clients[name] = session;
    console.log(`Client ${name} created successfully`);
    } catch (error) {
        console.error(`Error creating client ${name}:`, error);
        throw error;
    }
}

async function sendMessage(sessionName, number, message){
    const sessionClient = clients[sessionName];
    if(!sessionClient){
        throw new Error(`WhatsApp client not initialized for session ${sessionName}`);
    }
    const chatId = `55${number}@c.us`;
    await sessionClient.sendText(chatId, message);
}

export default {
    createClient,
    sendMessage    
};