import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Variable, Book, ScrollText, FlaskConical, 
  ArrowRight, BookOpen, HelpCircle, X, AlertCircle,
  Sparkles, Accessibility, Settings
} from 'lucide-react';

const subjects = [
  { id: 'math', name: 'MATEMÁTICA', basePath: '/math', icon: <Variable size={44} className="text-red-500" />, color: 'bg-red-50', desc: 'LOGOS: EQUAÇÕES E CÁLCULOS' },
  { id: 'port', name: 'PORTUGUÊS', basePath: '/portuguese', icon: <Book size={44} className="text-blue-500" />, color: 'bg-blue-50', desc: 'LUMINA: GRAMÁTICA E TEXTOS' },
  { id: 'hist', name: 'HISTÓRIA', basePath: '/history', icon: <ScrollText size={44} className="text-orange-500" />, color: 'bg-orange-50', desc: 'CHRONOS: CONTEXTOS HISTÓRICOS' },
  { id: 'science', name: 'CIÊNCIAS', basePath: '/science', icon: <FlaskConical size={44} className="text-emerald-500" />, color: 'bg-emerald-50', desc: 'BIO: LABORATÓRIO E REAÇÕES' },
];

export function Home() {
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [showNotice, setShowNotice] = useState(true); // Aparece sempre para os seus testes atuais

  return (
    <div className="flex min-h-screen bg-[#FBFDFF] text-slate-700">
      <Sidebar />

      {/* AVISO DE ACESSIBILIDADE GENÉRICO */}
      <AnimatePresence>
        {showNotice && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-[60px] p-12 shadow-2xl relative border border-white text-center"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto text-emerald-600 mb-6">
                <Accessibility size={40} />
              </div>

              <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight mb-4">
                Plataforma Acessível
              </h2>

              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                O <strong>Tutor.AI</strong> foi desenhado para todos. Podes ativar e personalizar as tuas ferramentas de <strong>Acessibilidade</strong> a qualquer momento nas definições do teu perfil.
              </p>

              <div className="space-y-3">
                <button 
                  onClick={() => setShowNotice(false)}
                  className="w-full bg-slate-900 text-white py-5 rounded-3xl font-black uppercase italic tracking-widest hover:bg-black transition-all shadow-lg"
                >
                  Entendido!
                </button>
                
                <Link 
                  to="/perfil" 
                  className="flex items-center justify-center gap-2 text-slate-400 font-bold uppercase text-[10px] hover:text-blue-600 transition-colors"
                >
                  <Settings size={14} /> Ir para Definições
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col items-center justify-center p-12 overflow-y-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">Minhas Jornadas</h1>
          <p className="text-blue-600 font-bold uppercase tracking-[4px] text-[10px] mt-3 italic">Explora as tuas disciplinas e evolui</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {subjects.map((sub) => (
            <motion.div 
              key={sub.id} 
              onClick={() => setSelectedSubject(sub)} 
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white p-12 rounded-[50px] shadow-sm border border-slate-100 cursor-pointer hover:shadow-2xl transition-all flex flex-col items-center justify-center gap-6"
            >
              <div className={`w-24 h-24 ${sub.color.replace('text', 'bg').replace('500', '50')} rounded-[32px] flex items-center justify-center shadow-inner`}>{sub.icon}</div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight italic uppercase">{sub.name}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1 opacity-60 italic">{sub.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL DE OPÇÕES DE SALA (TPC / DÚVIDAS / TESTE) */}
        <AnimatePresence>
          {selectedSubject && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6">
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white w-full max-w-lg rounded-[60px] p-12 shadow-2xl relative">
                <button onClick={() => setSelectedSubject(null)} className="absolute top-10 right-10 text-slate-300 hover:text-slate-600 transition-colors"><X size={28} /></button>
                <h2 className="text-3xl font-black text-center mb-10 italic uppercase leading-tight">SALA DE {selectedSubject.name}</h2>
                <div className="space-y-4">
                  <Option to={`${selectedSubject.basePath}/tpc`} title="APOIO A TPC" desc="Resolver trabalhos urgentes." icon={<AlertCircle className="text-blue-600" />} />
                  <Option to={`${selectedSubject.basePath}/duvidas`} title="TIRAR DÚVIDAS" desc="Entender conceitos difíceis." icon={<HelpCircle className="text-emerald-500" />} />
                  <Option to={`${selectedSubject.basePath}/test`} title="REALIZAR TAREFAS IA" desc="A IA avalia você sem dar respostas." icon={<BookOpen className="text-red-500" />} />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function Option({ to, title, desc, icon }: any) {
  return (
    <Link to={to} className="flex items-center gap-6 p-6 rounded-[35px] border border-slate-100 hover:bg-blue-50/40 transition-all group">
      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">{icon}</div>
      <div className="flex-1 text-left">
        <h4 className="font-black text-slate-800 text-sm uppercase italic leading-none">{title}</h4>
        <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">{desc}</p>
      </div>
      <ArrowRight size={18} className="text-slate-200 group-hover:text-blue-600 transition-colors" />
    </Link>
  );
}