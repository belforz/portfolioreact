import { useEffect, useState, useRef } from "react";
import { useChatStream } from "../hooks/useChat";

export function ChatMiniLeandro() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const { messages, loading, sendMessage, clearMessages, isFirstOfDay } =
    useChatStream();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text || loading) return;

    sendMessage(text);
    setInputText('');
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <button
        type="button"
        className="chat-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-expanded={isChatOpen}
      >
        {isChatOpen ? "fechar chat" : "mini leandro"}
      </button>

      {isChatOpen && (
        <div className="chat-panel" role="dialog" aria-label="Mini Leandro">
          <div className="chat-head">
            <span>Mini Leandro</span>
            {messages.length > 0 && (
              <button type="button" className="plain" onClick={clearMessages}>limpar</button>
            )}
          </div>

          <div className="chat-log">
            {messages.length === 0 && !loading && (
              <p className="chat-empty">Assistente de IA. Pergunte algo sobre o Leandro.</p>
            )}

            {messages.map((msg, index) => (
              <div key={index}>
                <p className="msg-who">{msg.fromUser ? 'você' : 'mini leandro'}</p>
                <p className="msg-text">{msg.animatedText}</p>
              </div>
            ))}

            {loading && (
              <p className="muted">{isFirstOfDay ? 'aquecendo o modelo…' : 'digitando…'}</p>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chat-form">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeydown}
              placeholder="Ctrl + Enter para enviar"
              aria-label="Mensagem"
              rows={2}
              disabled={loading}
            />
            <button type="submit" disabled={loading}>enviar</button>
          </form>
        </div>
      )}
    </>
  );
}
