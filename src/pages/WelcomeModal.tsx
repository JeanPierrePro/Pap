import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Variable, Book, ScrollText, FlaskConical, 
  ArrowRight, BookOpen, HelpCircle, X, AlertCircle,
  Sparkles, Accessibility, Type, CheckCircle2
} from 'lucide-react';

const subjects = [
  { id: 'math', name: 'MATEMÁTICA', basePath: '/math', icon: <Variable size={44} className="text-red-500" />, color: 'bg-red-50', desc: 'LOGOS: EQUAÇÕES E CÁLCULOS' },
  { id: 'port', name: 'PORTUGUÊS', basePath: '/portuguese', icon: <Book size={44} className="text-blue-500" />, color: 'bg-blue-50', desc: 'LUMINA: GRAMÁTICA E TEXTOS' },
  { id: 'hist', name: 'HISTÓRIA', basePath: '/history', icon: <ScrollText size={44} className="text-orange-500" />, color: 'bg-orange-50', desc: 'CHRONOS: CONTEXTOS HISTÓRICOS' },
  { id: 'science', name: 'CIÊNCIAS', basePath: '/science', icon: <FlaskConical size={44} className="text-emerald-500" />, color: 'bg-emerald-50', desc: 'BIO: LABORATÓRIO E REAÇÕES' },
];

export function Home() {
  const [selectedSubject, setSelectedSubject] = useState<any>(null);
  const [showWelcome, setShowWelcome] = useState(false); 
  const [welcomeStep, setWelcomeStep] = useState(1);

  // SIMULAÇÃO DE LOGIN: Verifica se é o primeiro acesso
  useEffect(() => {
    const hasVisited = localStorage.getItem("tutor_ai_visited");
    if (!hasVisited) {
      setShowWelcome(true);
    }
  }, []);

  const handleFinishIntro = () => {
    localStorage.setItem("tutor_ai_visited", "true"); // Marca como "já logou uma vez"
    setShowWelcome(false);
  };

  return (
    <div className="flex min-h-screen bg-[#FBFDFF] text-slate-700">
      <Sidebar />

      {/* POPUP SIMULADO DE BOAS-VINDAS */}
      <AnimatePresence>
        {showWelcome && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[60px] p-12 shadow-2xl relative border border-white"
            >
              {welcomeStep === 1 ? (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto text-blue-600">
                    <Sparkles size={40} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight">
                    Bem-vindo ao Tutor.AI!
                  </h2>
                  <p className="text-slate-500 font-medium">
                    Estamos focados em melhorar o seu desempenho escolar de forma rápida e adaptada.
                  </p>
                  <button 
                    onClick={() => setWelcomeStep(2)}
                    className="w-full bg-blue-600 text-white py-5 rounded-3xl font-black uppercase italic tracking-widest hover:bg-blue-700 transition-all shadow-lg"
                  >
                    Configurar Acessibilidade
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                      <Accessibility size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-800 uppercase italic">Inclusão Digital</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Adaptação para Dislexia</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 italic">
                    Nossa IA pode trocar fontes e simplificar textos para facilitar sua leitura.
                  </p>
                  
                  <div className="space-y-3">
                    <AdaptationToggle title="Fonte para Dislexia" desc="Letras desenhadas para evitar confusão visual." />
                    <AdaptationToggle title="Resumos Diretos" desc="A IA evitará textos longos e cansativos." />
                  </div>

                  <button 
                    onClick={handleFinishIntro}
                    className="w-full bg-slate-900 text-white py-5 rounded-3xl font-black uppercase italic tracking-widest hover:bg-black transition-all"
                  >
                    Finalizar e Estudar
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 uppercase italic tracking-tighter">Minhas Jornadas</h1>
          <p className="text-blue-600 font-bold uppercase tracking-[4px] text-[10px] mt-2">Escolha uma matéria para começar</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {subjects.map((sub) => (
            <motion.div 
              key={sub.id} onClick={() => setSelectedSubject(sub)} whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[50px] shadow-sm border border-slate-100 cursor-pointer hover:shadow-2xl transition-all flex flex-col items-center justify-center gap-6"
            >
              <div className={`w-24 h-24 ${sub.color.replace('text', 'bg').replace('500', '50')} rounded-[32px] flex items-center justify-center shadow-inner`}>{sub.icon}</div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight italic uppercase">{sub.name}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1 opacity-60">{sub.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL DE OPÇÕES DE SALA */}
        <AnimatePresence>
          {selectedSubject && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6">
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white w-full max-w-lg rounded-[60px] p-12 shadow-2xl relative">
                <button onClick={() => setSelectedSubject(null)} className="absolute top-10 right-10 text-slate-300"><X size={28} /></button>
                <h2 className="text-3xl font-black text-center mb-10 italic uppercase leading-tight">SALA DE {selectedSubject.name}</h2>
                <div className="space-y-4">
                  <Option to={`${selectedSubject.basePath}/tpc`} title="APOIO A TPC" desc="Resolver trabalhos urgentes." icon={<AlertCircle className="text-blue-600" />} />
                  <Option to={`${selectedSubject.basePath}/duvidas`} title="TIRAR DÚVIDAS" desc="Entender conceitos difíceis." icon={<HelpCircle className="text-emerald-500" />} />
                  <Option to={`${selectedSubject.basePath}/test`} title="REALIZAR TAREFAS IA" desc="Teste sua evolução sem ajuda externa." icon={<BookOpen className="text-red-500" />} />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// Sub-componentes
function AdaptationToggle({ title, desc }: any) {
  const [active, setActive] = useState(false);
  return (
    <div onClick={() => setActive(!active)} className={`flex items-center gap-4 p-4 rounded-3xl border-2 cursor-pointer transition-all ${active ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-100'}`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400'}`}><Type size={20} /></div>
      <div className="flex-1 text-left">
        <h4 className="text-sm font-black text-slate-800 uppercase italic leading-none">{title}</h4>
        <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">{desc}</p>
      </div>
      {active && <CheckCircle2 size={18} className="text-emerald-500" />}
    </div>
  );
}

function Option({ to, title, desc, icon }: any) {
  return (
    <Link to={to} className="flex items-center gap-6 p-6 rounded-[35px] border border-slate-100 hover:bg-blue-50/40 transition-all group">
      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">{icon}</div>
      <div className="flex-1 text-left">
        <h4 className="font-black text-slate-800 text-sm uppercase italic">{title}</h4>
        <p className="text-[9px] text-slate-400 font-bold uppercase">{desc}</p>
      </div>
      <ArrowRight size={18} className="text-slate-200 group-hover:text-blue-600" />
    </Link>
  );
}