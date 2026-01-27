import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  ComposedChart, Line
} from 'recharts';
import { Calendar, Plus, AlertTriangle, CheckCircle2 } from 'lucide-react';

// Dados de Simulação
const subjectData = [
  { subject: 'Matemática', estudado: 1.5, meta: 3, erros: 12, acertos: 40 },
  { subject: 'Português', estudado: 2.8, meta: 2, erros: 5, acertos: 55 },
  { subject: 'História', estudado: 0.5, meta: 2, erros: 15, acertos: 20 },
  { subject: 'Ciências', estudado: 1.2, meta: 1.5, erros: 3, acertos: 30 },
];

const proximasProvas = [
  { id: 1, materia: 'Matemática', data: '30/01', desc: 'Cálculo Diferencial', urgencia: 'alta' },
  { id: 2, materia: 'História', data: '05/02', desc: 'Brasil Colônia', urgencia: 'media' },
];

export function Performance() {
  // Estado para controlar o modal (será usado na próxima etapa de criação)
  const [showGoalModal, setShowGoalModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8F9FD]">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-800 tracking-tight">ANALÍTICA DO ALUNO</h1>
            <p className="text-gray-500 font-medium">JeanPierre, sua IA detectou foco necessário em <span className="text-red-500 font-bold">História</span></p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setShowGoalModal(!showGoalModal)}
              className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2"
            >
              <Calendar size={20} /> Agendar Teste
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-all flex items-center gap-2">
              <Plus size={20} /> Nova Meta
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Agenda de Testes */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 flex flex-col">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={20} /> Próximos Testes
            </h3>
            <div className="space-y-3 flex-1">
              {proximasProvas.map(prova => (
                <div key={prova.id} className={`p-4 rounded-2xl border-l-4 ${prova.urgencia === 'alta' ? 'border-red-500 bg-red-50' : 'border-orange-500 bg-orange-50'}`}>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-gray-800">{prova.materia}</span>
                    <span className="text-xs font-black text-gray-500 uppercase">{prova.data}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{prova.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Progresso de Metas */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Progresso de Metas Semanais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {subjectData.map(item => {
                const falta = Math.max(0, item.meta - item.estudado);
                const porcentagem = (item.estudado / item.meta) * 100;
                return (
                  <div key={item.subject}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-700">{item.subject}</span>
                      <span className={falta === 0 ? "text-green-500" : "text-gray-400"}>
                        {falta === 0 ? "CONCLUÍDO" : `FALTA ${falta}H`}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${falta === 0 ? 'bg-green-500' : 'bg-blue-600'}`} 
                        style={{ width: `${Math.min(porcentagem, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gráfico de Erros */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Análise de Erros por Matéria</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#F3F4F6" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="subject" type="category" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                  <Tooltip cursor={{fill: '#F9FAFB'}} contentStyle={{borderRadius: '12px'}} />
                  <Bar dataKey="erros" fill="#EF4444" radius={[0, 10, 10, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico Real vs Meta */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Tempo Estudado vs. Planejado</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={subjectData}>
                  <XAxis dataKey="subject" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="estudado" fill="#5D5FEF" radius={[8, 8, 0, 0]} barSize={40} />
                  <Line type="monotone" dataKey="meta" stroke="#F59E0B" strokeWidth={3} dot={{ r: 6 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Consistência Semanal */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Sua Consistência nesta Semana</h3>
            <div className="flex justify-around items-center">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((dia, idx) => (
                <div key={dia} className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-sm transition-all ${idx < 3 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-300 border-2 border-dashed border-gray-200'}`}>
                    {idx < 3 ? <CheckCircle2 size={28} /> : <div className="w-2 h-2 bg-gray-300 rounded-full" />}
                  </div>
                  <span className={`text-xs font-black uppercase ${idx < 3 ? 'text-blue-600' : 'text-gray-400'}`}>{dia}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}