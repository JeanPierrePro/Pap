import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, UserCircle2 } from 'lucide-react';
import { Link } from "react-router-dom";

export function Login() {
  // Variantes para animação em cascata (um por um)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-slate-100 p-10"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          
          {/* Ícone de Boneco Padronizado */}
          <motion.div variants={item} className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 border border-blue-100 shadow-inner">
            <UserCircle2 size={48} strokeWidth={1.5} />
          </motion.div>

          <motion.header variants={item} className="text-center mb-10">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase italic">Acessar Painel</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[3px] mt-2 font-sans">Identifique-se para continuar</p>
          </motion.header>

          <div className="w-full space-y-5">
            <motion.div variants={item} className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-slate-300" size={18} />
                <input type="email" placeholder="seu@email.com" className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all font-medium" />
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Senha</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-slate-300" size={18} />
                <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all font-medium" />
              </div>
            </motion.div>

            <motion.button 
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 mt-4"
            >
              Entrar <ArrowRight size={16} />
            </motion.button>
          </div>

          <motion.footer variants={item} className="mt-8">
            <Link to="/register" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">
              Criar nova conta
            </Link>
          </motion.footer>
        </motion.div>
      </motion.div>
    </div>
  );
}