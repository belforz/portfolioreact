import axios from 'axios';

const chatApi = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_CHAT,
});

export const sendChatMessage = async (message: string) => {
  const response = await chatApi.post('/chatbot/chat', { message });
  return response.data;
};

export const checkChatHealth = async () => {
  try {
    const response = await chatApi.get('/chatbot/');
    return response.data;
  } catch (error) {
    console.error('API fora do ar:', error);
    throw error;
  }
};

// Para streaming (opcional)
export async function sendChatStreamMessage(message: string, onChunk: (chunk: string) => void): Promise<void> {
  const response = await fetch(import.meta.env.VITE_PUBLIC_API_STREAM, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Erro na resposta da API:', response.status, errorText);
    return;
  }

  const reader = response.body!.getReader();
  const decoder = new TextDecoder('utf-8');

  let done = false;
  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;

    if (value) {
      const chunk = decoder.decode(value, { stream: true });
      onChunk(chunk);
    }
  }
}
