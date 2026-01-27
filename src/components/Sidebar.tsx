import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, CheckSquare, User, BarChart3, LogOut } from "lucide-react";

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/home" },
    { icon: <CheckSquare size={20} />, label: "Tarefas", path: "/tarefas" },
    { icon: <BarChart3 size={20} />, label: "Desempenho", path: "/desempenho" },
    { icon: <User size={20} />, label: "Perfil", path: "/perfil" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col p-6 h-screen sticky top-0 z-40">
      <div className="mb-10 px-4">
        <h2 className="text-2xl font-black text-blue-600 italic tracking-tighter uppercase">Tutor.ai</h2>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-4 rounded-2xl font-bold text-sm uppercase italic transition-all ${
              location.pathname === item.path 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                : "text-slate-400 hover:bg-slate-50 hover:text-blue-600"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button className="flex items-center gap-3 p-4 text-red-400 font-bold text-sm uppercase italic hover:bg-red-50 rounded-2xl transition-all mt-auto">
        <LogOut size={20} />
        <span>Sair</span>
      </button>
    </aside>
  );
}