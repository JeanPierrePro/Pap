import { Sidebar } from "../../../components/Sidebar";
import { HelpCircle, ChevronLeft, Send, GraduationCap, Variable } from 'lucide-react';
import { Link } from "react-router-dom";

export function MathDuvidas() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-emerald-100 shadow-sm text-emerald-600">
          <Link to="/home" className="text-slate-300 hover:text-emerald-600"><ChevronLeft /></Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter flex items-center gap-2">
            <HelpCircle /> Entender a Matéria
          </h1>
          <Variable size={20} />
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-emerald-50 rounded-[45px] p-12 flex flex-col items-center justify-center border border-emerald-100 text-center">
             <div className="w-24 h-24 bg-white rounded-[30px] flex items-center justify-center shadow-sm text-emerald-500 mb-8 border border-emerald-50">
                <Calculator size={48} />
             </div>
             <h2 className="text-3xl font-black text-emerald-900 italic uppercase">O que não ficou claro?</h2>
             <p className="text-emerald-700/60 font-bold text-sm uppercase tracking-widest mt-2 italic">Logos: Teoria e Conceitos Passo a Passo</p>
          </section>

          <section className="lg:col-span-5 bg-slate-900 rounded-[45px] flex flex-col overflow-hidden">
             <div className="flex-1 p-6 space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl text-emerald-200 text-sm italic">"Pode perguntar. Não apenas resolvo, eu te ensino a lógica por trás de cada passo."</div>
             </div>
             <div className="p-6 bg-white/5 flex gap-2 border-t border-white/5">
                <input className="flex-1 bg-transparent border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-emerald-500/50" placeholder="Qual sua dúvida na matéria?" />
                <button className="bg-emerald-600 p-4 rounded-xl text-white"><Send size={18}/></button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}