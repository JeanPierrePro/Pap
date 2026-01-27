import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Lock, Cpu, Save, Check, Eye, EyeOff, 
  Accessibility, ChevronRight, Settings2, Sparkles, X 
} from 'lucide-react';

export function Profile() {
  const [saved, setSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-700 font-sans">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 flex justify-center items-center overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl w-full bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden relative min-h-[600px]"
        >
          {/* Header Superior */}
          <div className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-white">
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight italic uppercase">Meu Perfil</h2>
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-[3px]">Configurações e Acessibilidade</p>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-100">JP</div>
            </div>
          </div>

          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Coluna 1: Dados e Acessibilidade */}
            <div className="space-y-10">
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-blue-600">
                  <User size={18} />
                  <h3 className="text-xs font-black uppercase tracking-widest italic">Dados de Acesso</h3>
                </div>
                <div className="space-y-4">
                  <MinimalInput label="Nome de Utilizador" placeholder="JeanPierre" />
                  <MinimalInput label="E-mail" placeholder="jean@tutorai.com" type="email" />
                </div>
              </section>

              {/* BOTÃO QUE ABRE A ÁREA DE ACESSIBILIDADE */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-500">
                  <Accessibility size={18} />
                  <h3 className="text-xs font-black uppercase tracking-widest italic">Inclusão</h3>
                </div>
                
                <button 
                  onClick={() => setIsAccessModalOpen(true)}
                  className="w-full group bg-emerald-50 hover:bg-emerald-100/50 border-2 border-emerald-100 p-6 rounded-[35px] flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-5 text-left">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm group-hover:scale-110 transition-transform">
                      <Settings2 size={24} />
                    </div>
                    <div>
                      <p className="font-black text-emerald-900 text-sm uppercase italic leading-none">Acessibilidade</p>
                      <p className="text-[9px] text-emerald-600/60 font-bold uppercase mt-1">Configurar ferramentas de apoio</p>
                    </div>
                  </div>
                  <ChevronRight className="text-emerald-300 group-hover:translate-x-1 transition-transform" />
                </button>
              </section>
            </div>

            {/* Coluna 2: IA e Botão Salvar */}
            <div className="space-y-10">
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-blue-600">
                  <Cpu size={18} />
                  <h3 className="text-xs font-black uppercase tracking-widest italic">Comportamento IA</h3>
                </div>
                <div className="bg-slate-50 p-8 rounded-[35px] border border-slate-100 space-y-8">
                  <IAToggle label="Explicação" desc="Nível de detalhe nas respostas" options={["Rápida", "Completa"]} />
                  <IAToggle label="Estilo" desc="Foco prático ou teórico" options={["Prático", "Teórico"]} />
                </div>
              </section>

              <div className="pt-4">
                <motion.button 
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSave}
                  className={`w-full py-5 rounded-[25px] font-black text-xs uppercase tracking-[4px] transition-all flex items-center justify-center gap-3 shadow-xl ${
                    saved ? 'bg-emerald-500 text-white shadow-emerald-100' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100'
                  }`}
                >
                  {saved ? <Check size={18} /> : <Save size={18} />}
                  {saved ? "Alterações Guardadas" : "Guardar Perfil"}
                </motion.button>
              </div>
            </div>
          </div>

          {/* SUB-PÁGINA DE ACESSIBILIDADE (Desliza por cima) */}
          <AnimatePresence>
            {isAccessModalOpen && (
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute inset-0 bg-white z-50 p-10 flex flex-col"
              >
                <header className="flex items-center justify-between mb-12 border-b border-slate-50 pb-8">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsAccessModalOpen(false)} 
                      className="p-3 hover:bg-slate-100 rounded-2xl transition-colors text-slate-400"
                    >
                      <ChevronRight className="rotate-180" />
                    </button>
                    <div>
                       <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tighter">Central de Acessibilidade</h2>
                       <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[3px]">Personalização Inclusiva</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                    <Accessibility size={32} />
                  </div>
                </header>

                <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-6">
                  <div className="w-24 h-24 bg-slate-50 rounded-[40px] flex items-center justify-center text-slate-200 border-2 border-dashed border-slate-100">
                    <Sparkles size={48} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic">Espaço para Inovação</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Aqui você poderá listar todas as opções de acessibilidade que pesquisar no futuro. 
                    O design está pronto para receber filtros, trocas de fontes e modos visuais.
                  </p>
                  <button 
                    onClick={() => setIsAccessModalOpen(false)}
                    className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all"
                  >
                    Voltar ao Perfil
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

// COMPONENTES AUXILIARES
function MinimalInput({ label, placeholder, type = "text" }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-[18px] text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:bg-white transition-all font-medium"
      />
    </div>
  );
}

function IAToggle({ label, desc, options }: any) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-xs font-bold text-slate-800 tracking-tight leading-none">{label}</p>
        <p className="text-[9px] text-slate-400 font-medium mt-1 uppercase tracking-tighter">{desc}</p>
      </div>
      <div className="flex bg-white p-1 rounded-2xl border border-slate-200 w-full">
        {options.map((opt: string) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${
              selected === opt ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}