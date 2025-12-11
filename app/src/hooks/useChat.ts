import { useRef, useEffect } from "react";
import { sendChatMessage } from "../config/chatService";

const STORAGE_KEY = "mini-leandro-chat-history";

type InterectionMessage = {
  fromUser: boolean;
  animatedText: string;
}

export function useChat() {
  const messages = useRef<InterectionMessage[]>([]);
  const loading = useRef(false);


  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved)
      { const parsed = JSON.parse(saved);
        messages.current = parsed.map((msg: InterectionMessage) =>{
          return {
            fromUser: msg.fromUser,
            animatedText: msg.animatedText || "",
          }

        })

      }} catch {
        console.error("[useChat] Failed to load chat history from localStorage")
        messages.current = [];

      }
  }, [])

  useEffect(() => {
    const persistable = messages.current.map((msg: InterectionMessage) => ({
      fromUser: msg.fromUser,
      animatedText: msg.animatedText,
    }))

    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));


  }, []);

  const sendMessage = async (userMessage: string) => {
    const text = userMessage.trim();
    if (!text) {
      console.warn("[useChat] Mensagem vazia ignorada");
      return;
    }

    console.log("[useChat] Enviando mensagem do usuário:", text);

    loading.current = true;

    messages.current.push({
      fromUser: true,
      animatedText: text,
    });

    try {
      const response = await sendChatMessage({message: text});
      console.log("[useChat] Resposta recebida do backend:", response);

      const reply = String(response?.reply || "⚠️ Sem resposta");

      messages.current.push({
        fromUser: false,
        animatedText: reply,
      });

      console.log("[useChat] Resposta do bot adicionada:", reply);
    } catch (error) {
      console.error("[useChat] Erro ao obter resposta:", error);
      messages.current.push({
        fromUser: false,
        animatedText: "⚠️ Erro ao obter resposta.",
      });
    }

    loading.current = false;
    console.log("[useChat] Fim do envio. loading = false");
  };

  const clearMessages = () => {
    localStorage.removeItem(STORAGE_KEY);
    messages.current = [];
    console.log("[useChat] Mensagens limpas");
  };

  return {
    messages,
    loading,
    sendMessage,
    clearMessages,
  };
}
