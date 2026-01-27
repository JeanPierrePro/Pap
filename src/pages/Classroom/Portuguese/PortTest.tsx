import { Sidebar } from "../../../components/Sidebar";
import { BookOpen, ChevronLeft, Send, Brain } from 'lucide-react';
import { Link } from "react-router-dom";

export function PortTest() {
  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-6 flex flex-col h-screen overflow-hidden">
        <header className="flex items-center justify-between mb-6 bg-white p-6 rounded-[35px] border-2 border-red-100 shadow-sm">
          <Link to="/home" className="text-slate-300 hover:text-red-600"><ChevronLeft /></Link>
          <h1 className="text-lg font-black text-slate-800 uppercase italic tracking-tighter flex items-center gap-2">
            <BookOpen className="text-red-500" /> Teste de Evolução: Português
          </h1>
          <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-black">MODO RÍGIDO</div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden pb-4">
          <section className="lg:col-span-7 bg-white rounded-[45px] border border-slate-100 flex flex-col items-center justify-center p-10 text-center">
            <Brain size={80} className="text-red-50 mb-8" />
            <div className="bg-slate-900 text-white p-12 rounded-[40px] shadow-2xl max-w-lg">
              <p className="text-xl font-medium italic opacity-80 leading-relaxed">"Analise a oração abaixo e identifique o sujeito e o predicado, classificando-os corretamente."</p>
              <h3 className="mt-6 text-2xl font-black text-red-400">"As estrelas brilham no céu infinito."</h3>
            </div>
          </section>

          <section className="lg:col-span-5 bg-red-950 rounded-[45px] flex flex-col overflow-hidden border border-red-900/50">
            <div className="flex-1 p-8 text-red-200/40 text-sm font-bold uppercase italic tracking-tighter">
              A Lumina está avaliando... responda sem ajuda para gerar seu gráfico de desempenho.
            </div>
            <div className="p-6 bg-red-900/40 flex gap-2">
              <input className="flex-1 bg-white/10 border border-white/10 p-4 rounded-2xl text-white outline-none placeholder:text-red-200/20" placeholder="Sua resposta final..." />
              <button className="bg-red-600 p-4 rounded-xl text-white shadow-lg"><Send size={18}/></button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}