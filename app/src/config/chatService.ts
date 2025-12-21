import { chatApi} from "../../../api/service/axios-config";
import type { Message } from "../types/request";

export const checkChatHealth = async() =>{
    try {
    const response = await chatApi.get('/chatbot/');
    return response.data;
    } catch(error){
        console.error("API fora do ar:", error)
        throw error;
    }
}

export const sendChatMessage = async(message: Message) => {
    const response = await chatApi.post('/chatbot/chat',
        {
            message: message.message
        }
    );
    return response.data;
}

// export async function sendChatStreamMessage(message:Message, onChunk:( chunk: string) => void) {
//     // TODO: Resolver problema de CORS com o endpoint /chat/stream
//     // Por enquanto usando sendChatMessage normal
//     const response = await sendChatMessage(message);
    
//     if (response?.response) {
//       onChunk(response.response);
//     }
// }

// export async function sendChatStreamMessage(message:Message, onChunk:( chunk: string) => void) {
//     // Usar fetch para streaming
//     const streamUrl = import.meta.env.VITE_PUBLIC_API_STREAM;

//     const response = await fetch(streamUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: message.message }),
//     });
  
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("❌ Erro na resposta da API:", response.status, errorText);
//       return;
//     }
  
//     if (!response.body) {
//       console.error("❌ Response body is null.");
//       return;
//     }
//     const reader = response.body.getReader();
//     const decoder = new TextDecoder("utf-8");
  
//     let done = false;
//     while (!done) {
//       const { value, done: readerDone } = await reader.read();
//       done = readerDone;
  
//       if (value) {
//         const chunk = decoder.decode(value, { stream: true });
//         onChunk(chunk);
//       }
//     }
//   }
  
  