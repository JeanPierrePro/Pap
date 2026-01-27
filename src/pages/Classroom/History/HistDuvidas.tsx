import { Sidebar } from "../../../components/Sidebar";
import { ScrollText, Send, HelpCircle } from "lucide-react"; // ScrollText adicionado aqui
import { useState } from "react";

export function HistDuvidas() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex min-h-screen bg-[#FBFDFF]">
      <Sidebar />
      <main className="flex-1 p-12 flex flex-col items-center">
        <header className="text-center mb-12">
          {/* O erro sumirá aqui */}
          <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-orange-500">
            <ScrollText size={40} /> 
          </div>
          <h1 className="text-3xl font-black italic uppercase text-slate-900">Dúvidas de História</h1>
        </header>
        
        {/* Resto do seu código de chat/dúvidas */}
      </main>
    </div>
  );
}