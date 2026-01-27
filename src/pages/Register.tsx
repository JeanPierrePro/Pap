import { motion } from "framer-motion";
import { Mail, Lock, UserCircle2, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from "react-router-dom";

export function Register() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-slate-100 p-10"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Link to="/login" className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors mb-6">
              <ChevronLeft size={14} /> Voltar
            </Link>
          </motion.div>

          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-blue-100">
              <UserCircle2 size={48} strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.header variants={item} className="text-center mb-10">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase italic">Novo Cadastro</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[3px] mt-2">Junte-se ao TutorAI</p>
          </motion.header>

          <div className="space-y-5">
            <motion.div variants={item} className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
              <div className="relative flex items-center">
                <UserCircle2 className="absolute left-4 text-slate-300" size={18} />
                <input type="text" placeholder="Seu nome" className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm focus:outline-none focus:border-blue-400 transition-all font-medium" />
              </div>
            </motion.div>
            
            <motion.div variants={item} className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-slate-300" size={18} />
                <input type="email" placeholder="seu@email.com" className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm focus:outline-none focus:border-blue-400 transition-all font-medium" />
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Senha</label>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-slate-300" size={18} />
                <input type="password" placeholder="Mínimo 8 caracteres" className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm focus:outline-none focus:border-blue-400 transition-all font-medium" />
              </div>
            </motion.div>

            <motion.button 
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 mt-4"
            >
              Confirmar <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}