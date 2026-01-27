import { Sidebar } from "../../../components/Sidebar";
import { HelpCircle, ChevronLeft, Send, GraduationCap } from 'lucide-react';
import { Link } from "react-router-dom";

export function ScienceDuvidas() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-emerald-100 text-emerald-600">
          <Link to="/home" className="text-slate-300"><ChevronLeft /></Link>
          <h1 className="text-lg font-black uppercase italic tracking-tighter flex items-center gap-2">
            <HelpCircle /> Aprender Matéria
          </h1>
          <GraduationCap />
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-emerald-50 rounded-[45px] p-10 flex flex-col items-center justify-center border border-emerald-100">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                <HelpCircle size={40} />
             </div>
             <h2 className="text-2xl font-black text-emerald-900 mb-4 italic">O que você quer aprender hoje?</h2>
             <p className="text-emerald-700/60 text-center max-w-sm font-medium">Estou pronto para explicar qualquer conceito de Ciências de um jeito fácil.</p>
          </section>

          <section className="lg:col-span-5 bg-[#111] rounded-[45px] flex flex-col overflow-hidden">
             {/* Chat de dúvida clássico */}
             <div className="flex-1 p-6"></div>
             <div className="p-6 bg-white/5 flex gap-2">
                <input className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none" placeholder="Tire sua dúvida..." />
                <button className="bg-emerald-600 p-4 rounded-xl text-white"><Send size={18}/></button>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}