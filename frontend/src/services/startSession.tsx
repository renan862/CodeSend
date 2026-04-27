import api from "./api";

interface StartSession{
    name: string;
}

export const startSession = async (dados: StartSession) => {
    try {
        const response = await api.post("/start-session", dados, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Sessão iniciada com sucesso:", response.data);

    } catch (error) {
        console.error("Erro ao iniciar sessão:", error);
    }
}