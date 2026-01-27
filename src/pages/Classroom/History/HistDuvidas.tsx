import { Sidebar } from "../../../components/Sidebar";
import { HelpCircle, ChevronLeft, Send, GraduationCap, Landmark } from 'lucide-react';
import { Link } from "react-router-dom";

export function HistDuvidas() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-emerald-100 shadow-sm text-emerald-600">
          <Link to="/home" className="text-slate-300 hover:text-emerald-600"><ChevronLeft /></Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter flex items-center gap-2">
            <HelpCircle /> Entender o Passado
          </h1>
          <Landmark size={20} />
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-emerald-50 rounded-[45px] p-12 flex flex-col items-center justify-center border border-emerald-100 text-center">
             <div className="w-24 h-24 bg-white rounded-[30px] flex items-center justify-center shadow-sm text-emerald-500 mb-8 border border-emerald-50">
                <ScrollText size={48} />
             </div>
             <h2 className="text-3xl font-black text-emerald-900 italic uppercase">Qual sua dúvida histórica?</h2>
             <p className="text-emerald-700/60 font-bold text-sm uppercase tracking-widest mt-2 italic">Chronos: Contexto e Explicação</p>
          </section>

          <section className="lg:col-span-5 bg-[#121214] rounded-[45px] flex flex-col overflow-hidden border border-white/5">
             <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                <div className="bg-white/5 p-4 rounded-2xl text-emerald-100/70 text-sm italic leading-relaxed">
                  "Estou pronto para te contar os detalhes de qualquer era. O que não ficou claro na aula?"
                </div>
             </div>
             <div className="p-6 bg-white/5 flex gap-2">
                <input className="flex-1 bg-transparent border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-emerald-500/50" placeholder="Pergunte sobre um evento..." />
                <button className="bg-emerald-600 p-4 rounded-xl text-white"><Send size={18}/></button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}