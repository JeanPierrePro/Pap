import { Sidebar } from "../../../components/Sidebar";
import { BookOpen, ChevronLeft, Send, Brain, Target } from 'lucide-react';
import { Link } from "react-router-dom";

export function MathTest() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-red-100 shadow-sm">
          <Link to="/home" className="text-slate-300 hover:text-red-600"><ChevronLeft /></Link>
          <h1 className="text-lg font-black text-slate-800 uppercase italic tracking-tighter flex items-center gap-2">
            <Target className="text-red-500" /> Tarefas IA: Matemática
          </h1>
          <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase">Modo Rígido</div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-white rounded-[45px] border border-slate-100 flex flex-col items-center justify-center p-10 text-center">
            <Brain size={80} className="text-red-50 mb-8" />
            <div className="bg-slate-900 text-white p-12 rounded-[40px] shadow-2xl w-full max-w-lg border-b-8 border-red-600">
              <span className="text-red-500 text-xs font-black uppercase tracking-widest block mb-4 italic">Desafio de Álgebra</span>
              <h3 className="text-4xl font-black tracking-widest italic font-mono uppercase">x² - 9x + 20 = 0</h3>
              <p className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-tighter">Encontre as raízes sem ajuda externa.</p>
            </div>
          </section>

          <section className="lg:col-span-5 bg-[#0A0A0B] rounded-[45px] flex flex-col overflow-hidden border border-white/5">
            <div className="flex-1 p-8 text-white/30 text-[10px] font-black uppercase italic tracking-[3px] leading-relaxed">
              Logos está analisando seu tempo de resposta e lógica... erros são registrados para o seu gráfico de evolução.
            </div>
            <div className="p-6 bg-white/5 flex gap-2">
              <input className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-red-500/50 placeholder:text-white/10" placeholder="Qual o valor de x?" />
              <button className="bg-red-600 p-4 rounded-xl text-white shadow-xl hover:bg-red-500 transition-colors"><Send size={18}/></button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}