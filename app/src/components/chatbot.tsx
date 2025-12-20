import { useEffect, useState, useRef } from "react";
import { useChatStream } from "../hooks/useChat";
import portfolio from "../portfolio";
import useDarkMode from "../hooks/useDarkMode";

interface ChatMiniLeandroProps {
  visible: boolean;
  onUpdateVisible?: (visible: boolean) => void;
}

interface Message {
  fromUser: boolean;
  animatedText: string;
}

export function ChatMiniLeandro({ visible, onUpdateVisible }: ChatMiniLeandroProps) {
  const [isChatOpen, setIsChatOpen] = useState(visible);
  const [inputText, setInputText] = useState('');
  const { messages, loading, sendMessage, clearMessages, isFirstOfDay } =
    useChatStream();
  const messagesEndRef = useRef<HTMLDivElement>(null); 
  const { darkModeActive } = useDarkMode();

  useEffect(() => {
    setIsChatOpen(visible);
  }, [visible]);

  // Scroll automático quando novas mensagens chegam
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    onUpdateVisible?.(!isChatOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text || loading) return;

    sendMessage(text);
    setInputText('');
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const userAvatar = (portfolio.iconsImages.userImage)
  const botAvatar = (portfolio.iconsImages.botImage);

  return (
    <>
      <div
        onClick={toggleChat}
        className="fixed bottom-4 right-4 w-16 h-16 cursor-pointer transition-all duration-500 z-40 hover:scale-110"
      >
        <img
          src={botAvatar}
          alt="Mini Leandro"
          className="w-full h-full rounded-full shadow-lg border-2 border-white"
        />
      </div>

      {isChatOpen && (
        <div className={`fixed bottom-24 right-4 w-[95%] max-w-md ${darkModeActive ? 'bg-gray-900' : 'bg-black'} text-white border border-gray-transition-all motion-reduce:transition-none duration-500 delay-[400ms]700 rounded-lg shadow-2xl z-50 flex flex-col h-[500px] `}>
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold">Mini Leandro</h2>
            {messages.length > 0 && (
              <button
                onClick={clearMessages}
                className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-red-200"
              >
                Limpar
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={botAvatar}
                  alt="Bot"
                  className="w-16 h-16 rounded-full border-2 border-white mb-3"
                />
                <p className="text-sm text-gray-300 text-center px-4">
                  Sou um assistente de IA. Pergunte algo sobre Leandro.
                </p>
              </div>
            )}

            {messages.map((msg: Message, index) => (
              <div key={index} className={`flex items-end p-3 gap-2 ${msg.fromUser ? 'justify-end' : ''}`}>
                <img
                  src={msg.fromUser ? userAvatar : botAvatar}
                  alt={msg.fromUser ? 'Você' : 'Bot'}
                  className="w-8 h-8 rounded-full border border-white flex-shrink-0"
                />
                <div
                  className={`p-3 rounded-lg max-w-[75%] whitespace-pre-wrap break-words ${
                    msg.fromUser
                      ? 'bg-gray-700'
                      : 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'
                  }`}
                >
                  {msg.animatedText}
                </div>
              </div>
            ))}

            {/* INDICADOR DE DIGITAÇÃO */}
            {loading && !isFirstOfDay && (
              <div className="flex items-end gap-2 animate-in fade-in duration-300">
                <img
                  src={botAvatar}
                  alt="Bot"
                  className="w-8 h-8 rounded-full border border-white flex-shrink-0"
                />
                <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 p-3 rounded-lg flex gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            )}

            {/* INDICADOR DE DIGITAÇÃO - PRIMEIRA MENSAGEM DO DIA */}
            {loading && isFirstOfDay && (
              <div className="flex items-end gap-2 animate-in fade-in duration-300">
                <img
                  src={botAvatar}
                  alt="Bot"
                  className="w-8 h-8 rounded-full border border-white flex-shrink-0"
                />
                <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-3 rounded-lg">
                  <span className="text-sm">⏳ Aquecendo os neurônios...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className={`flex gap-2 border-t border-gray-700 p-3 ${darkModeActive ? 'bg-gray-900' : 'bg-black'}`}
          >
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeydown}
              placeholder="Para enviar a mensagem, aperte CTRL + Enter ..."
              rows={2}
              disabled={loading}
              className="flex-1 mr-2 p-2 rounded bg-gray-800 text-white resize-none outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}