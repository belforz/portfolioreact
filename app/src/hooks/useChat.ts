import { useState, useCallback, useEffect } from 'react';
import { sendChatMessage } from './useAxios';

const STORAGE_KEY = 'mini-leandro-chat-history';
const LAST_MESSAGE_DATE_KEY = 'mini-leandro-last-message-date';

interface Message {
  fromUser: boolean;
  animatedText: string;
}

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function isFirstMessageOfDay(): boolean {
  const lastDate = localStorage.getItem(LAST_MESSAGE_DATE_KEY);
  const today = getToday();
  return lastDate !== today;
}

export function useChatStream() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFirstOfDay, setIsFirstOfDay] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setMessages(JSON.parse(saved));
      }
      // Verificar se é primeira mensagem do dia
      setIsFirstOfDay(isFirstMessageOfDay());
    } catch (error) {
      console.warn('[useChatStream] Falha ao carregar histórico:', error);
    }
  }, []);

  useEffect(() => {
    const persistable = messages.map((msg) => ({
      fromUser: msg.fromUser,
      animatedText: msg.animatedText,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
  }, [messages]);

  const sendMessage = useCallback(async (userMessage: string) => {
    const text = userMessage.trim();
    if (!text) return;

    const isFirstMsg = isFirstMessageOfDay();
    setIsFirstOfDay(isFirstMsg);

    setLoading(true);

    // Adicionar mensagem do usuário
    setMessages((prev) => [
      ...prev,
      {
        fromUser: true,
        animatedText: text,
      },
    ]);

    try {
      // Enviar mensagem e receber resposta completa
      const response = await sendChatMessage(text);
      const botReply = response?.reply || '⚠️ Sem resposta do servidor';

      // Adicionar resposta do bot ao histórico
      setMessages((prev) => [
        ...prev,
        {
          fromUser: false,
          animatedText: botReply,
        },
      ]);

      // Marcar que já houve mensagem hoje
      localStorage.setItem(LAST_MESSAGE_DATE_KEY, getToday());
      setIsFirstOfDay(false);
    } catch (error) {
      console.error('[useChatStream] Erro:', error);
      setMessages((prev) => [
        ...prev,
        {
          fromUser: false,
          animatedText: '⚠️ Erro ao obter resposta.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
  }, []);

  return {
    messages,
    loading,
    sendMessage,
    clearMessages,
    isFirstOfDay,
  };
}