import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Variable, Book, ScrollText, FlaskConical,
  CheckCircle2, Circle, Clock, ChevronRight 
} from 'lucide-react'; // Ícones sincronizados com a Home

const subjects = [
  { id: 'por', name: 'Português', basePath: '/portuguese/test', icon: <Book size={24} />, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'mat', name: 'Matemática', basePath: '/math/test', icon: <Variable size={24} />, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 'his', name: 'História', basePath: '/history/test', icon: <ScrollText size={24} />, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 'cie', name: 'Ciências', basePath: '/science/test', icon: <FlaskConical size={24} />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

const allTasks = [
  // Português
  { id: 1, subjectId: 'por', title: "Análise Sintática: Orações", duration: "25 min", status: "pendente" },
  { id: 2, subjectId: 'por', title: "Figuras de Linguagem", duration: "20 min", status: "pendente" },
  { id: 3, subjectId: 'por', title: "Uso da Crase", duration: "15 min", status: "concluido" },
  // Matemática
  { id: 4, subjectId: 'mat', title: "Equações de 2º Grau", duration: "20 min", status: "pendente" },
  { id: 5, subjectId: 'mat', title: "Geometria Plana", duration: "30 min", status: "concluido" },
  // História (Novas tarefas para teste)
  { id: 6, subjectId: 'his', title: "Revolução Industrial", duration: "35 min", status: "pendente" },
  { id: 7, subjectId: 'his', title: "Brasil Colônia", duration: "25 min", status: "concluido" },
  // Ciências (Novas tarefas para teste)
  { id: 8, subjectId: 'cie', title: "Células Animal e Vegetal", duration: "20 min", status: "pendente" },
  { id: 9, subjectId: 'cie', title: "Tabela Periódica", duration: "30 min", status: "pendente" },
];

export function Tasks() {
  const [selectedSubjectId, setSelectedSubjectId] = useState('por');

  const currentSubject = subjects.find(s => s.id === selectedSubjectId);

  const pendingTasks = allTasks.filter(t => t.subjectId === selectedSubjectId && t.status === 'pendente');
  const completedTasks = allTasks.filter(t => t.subjectId === selectedSubjectId && t.status === 'concluido');

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-700 font-sans">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 flex justify-center overflow-y-auto">
        <div className="max-w-5xl w-full space-y-10">
          
          <header className="text-center md:text-left">
            <h1 className="text-3xl font-black text-slate-800 tracking-tight italic uppercase">Minhas Tarefas</h1>
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[3px] mt-1">Gerencie seu progresso por disciplina</p>
          </header>

          {/* Seleção de Matéria com ícones da Home */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((sub) => (
              <motion.button
                key={sub.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`p-6 rounded-[32px] flex flex-col items-center gap-3 transition-all border-2 ${
                  selectedSubjectId === sub.id 
                  ? `border-blue-600 bg-white shadow-xl shadow-blue-100` 
                  : 'border-transparent bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${sub.bg} ${sub.color}`}>
                  {sub.icon}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-wider ${selectedSubjectId === sub.id ? 'text-blue-600' : 'text-slate-400'}`}>
                  {sub.name}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSubjectId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-10"
              >
                <section className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[3px] flex items-center gap-2">
                      <Circle size={12} className="fill-blue-600/20" /> Pendentes
                    </h2>
                    <div className="h-[1px] flex-1 bg-slate-100"></div>
                  </div>
                  
                  {pendingTasks.length > 0 ? (
                    pendingTasks.map(task => (
                      <TaskCard 
                        key={task.id} 
                        task={task} 
                        targetPath={currentSubject?.basePath} 
                      />
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic ml-6">Nenhuma tarefa pendente para esta matéria.</p>
                  )}
                </section>

                <section className="space-y-4 opacity-70">
                  <div className="flex items-center gap-4">
                    <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[3px] flex items-center gap-2">
                      <CheckCircle2 size={12} /> Concluídas
                    </h2>
                    <div className="h-[1px] flex-1 bg-slate-100"></div>
                  </div>

                  {completedTasks.length > 0 ? (
                    completedTasks.map(task => <TaskCard key={task.id} task={task} isCompleted />)
                  ) : (
                    <p className="text-xs text-slate-400 italic ml-6">Você ainda não concluiu tarefas nesta matéria.</p>
                  )}
                </section>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

function TaskCard({ task, isCompleted = false, targetPath }: any) {
  return (
    <div className={`group bg-white p-5 rounded-[24px] border border-slate-100 flex items-center justify-between transition-all ${!isCompleted && 'hover:shadow-lg hover:border-blue-200'}`}>
      <div className="flex items-center gap-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isCompleted ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-50 text-slate-400'}`}>
          {isCompleted ? <CheckCircle2 size={18} /> : <Circle size={18} />}
        </div>
        <div>
          <h3 className={`text-sm font-bold ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
            {task.title}
          </h3>
          <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-400 font-bold uppercase">
            <span className="flex items-center gap-1"><Clock size={12} /> {task.duration}</span>
            {!isCompleted && <span className="text-blue-500 italic">Pronto para iniciar</span>}
          </div>
        </div>
      </div>
      
      {!isCompleted && targetPath && (
        <Link 
          to={targetPath} 
          className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-100 hover:scale-110 transition-transform flex items-center justify-center"
        >
          <ChevronRight size={18} />
        </Link>
      )}
    </div>
  );
}