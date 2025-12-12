import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LucideAnnoyed} from 'lucide-react';

const SplashView = ({ onComplete}: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
   
    document.body.style.overflow = 'hidden';

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        const increment = old > 80 ? 1 : 5; 
        return Math.min(old + increment, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
      // Libera o scroll quando desmontar
      document.body.style.overflow = 'unset'; 
    };
  }, [onComplete]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000ff',
        color:'#FACC15',
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', transition: { duration: 0.8 } }}
    >
      {/* Background Decorativo Animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-25%] left-[-10%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.5, 1],
                x: [0, 100, 0] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        {/* Logo Container - Muito Maior */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            duration: 1.5 
          }}
          className="mb-12 p-8 bg-white/5 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/20"
        >
          {/* Ícone bem grande */}
          <LucideAnnoyed size={120} color="#FACC15" className="drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
        </motion.div>

        {/* Texto Principal */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2"
        >
          NOME DO APP
        </motion.h1> */}
        
        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16 text-lg md:text-xl font-light tracking-widest uppercase text-yellow-200"
        >
          Bem-vindo ao Futuro :D
        </motion.p>
      </div>

      {/* Barra de Progresso Larga e Elegante */}
      <div className="mb-6 relative z-10 w-[80%] max-w-[400px] h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
      
      {/* Texto de status (opcional) */}
      <motion.div className="text-yellow-200 font-mono text-sm relative z-10">
        {progress >= 100 ? "🤯Sucesso!" : `😶‍🌫️ Carregando... ${progress}%`}
      </motion.div>

    </motion.div>
  );
};

export default SplashView;
