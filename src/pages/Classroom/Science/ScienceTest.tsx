import { Sidebar } from "../../../components/Sidebar";
import { Brain, ChevronLeft, Send, BookOpen } from 'lucide-react';
import { Link } from "react-router-dom";

export function ScienceTest() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-red-100">
          <Link to="/home" className="text-slate-300"><ChevronLeft /></Link>
          <h1 className="text-lg font-black text-slate-800 uppercase italic tracking-tighter flex items-center gap-2">
            <BookOpen className="text-red-500" /> Teste de Evolução: Ciências
          </h1>
          <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase">IA Avaliadora</div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-white rounded-[45px] border border-slate-100 flex flex-col items-center justify-center p-10">
            <Brain size={80} className="text-red-50 mb-6" />
            <div className="bg-slate-900 text-green-400 p-10 rounded-[40px] font-mono text-center shadow-2xl">
              "Explique o processo de mitose e como ele difere da meiose."
            </div>
          </section>

          <section className="lg:col-span-5 bg-[#0F172A] rounded-[45px] flex flex-col overflow-hidden">
            <div className="flex-1 p-6 text-slate-400 text-sm italic">
              O Bio está observando... ele não dará a resposta.
            </div>
            <div className="p-6 bg-slate-900/50 flex gap-2">
              <input className="flex-1 bg-white/5 border border-white/10 p-4 rounded-2xl text-white outline-none" placeholder="Sua resposta final..." />
              <button className="bg-red-600 p-4 rounded-xl text-white"><Send size={18}/></button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}