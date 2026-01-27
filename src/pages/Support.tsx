import { Sidebar } from "../components/Sidebar";

export function Support() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FD]">
      <Sidebar />
      <main className="flex-1 p-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Suporte TutorAI</h1>
        <p className="text-gray-500 mb-8">Como podemos te ajudar hoje?</p>
        <div className="bg-white p-8 rounded-3xl border border-gray-50 max-w-2xl">
          <textarea 
            className="w-full h-40 p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Descreva seu problema ou sugestão..."
          />
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">
            Enviar Mensagem
          </button>
        </div>
      </main>
    </div>
  );
}