import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Páginas Base e Autenticação
import { Home } from './pages/Home';
import { Tasks } from './pages/Tasks';
import { Profile } from './pages/Profile';
import { Performance } from './pages/Performance';
import { Login } from './pages/Login';       // Adicionado
import { Register } from './pages/Register'; // Adicionado

// Importações MATH
import { MathDuvidas } from './pages/Classroom/Math/MathDuvidas';
import { MathTest } from './pages/Classroom/Math/MathTest';
import { MathTPC } from './pages/Classroom/Math/MathTPC';

// Importações PORTUGUESE
import { PortDuvidas } from './pages/Classroom/Portuguese/PortDuvidas';
import { PortTest } from './pages/Classroom/Portuguese/PortTest';
import { PortTPC } from './pages/Classroom/Portuguese/PortTPC';

// Importações HISTORY
import { HistDuvidas } from './pages/Classroom/History/HistDuvidas';
import { HistTest } from './pages/Classroom/History/HistTest';
import { HistTPC } from './pages/Classroom/History/HistTPC';

// Importações SCIENCE
import { ScienceDuvidas } from './pages/Classroom/Science/ScienceDuvidas';
import { ScienceTest } from './pages/Classroom/Science/ScienceTest';
import { ScienceTPC } from './pages/Classroom/Science/ScienceTPC';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTAS DE ACESSO (LOGIN/REGISTER) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD E GERENCIAMENTO */}
        <Route path="/home" element={<Home />} />
        <Route path="/tarefas" element={<Tasks />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/desempenho" element={<Performance />} />
        
        {/* MATH ROUTES */}
        <Route path="/math/tpc" element={<MathTPC />} />
        <Route path="/math/duvidas" element={<MathDuvidas />} />
        <Route path="/math/test" element={<MathTest />} />

        {/* PORTUGUESE ROUTES */}
        <Route path="/portuguese/tpc" element={<PortTPC />} />
        <Route path="/portuguese/duvidas" element={<PortDuvidas />} />
        <Route path="/portuguese/test" element={<PortTest />} />

        {/* HISTORY ROUTES */}
        <Route path="/history/tpc" element={<HistTPC />} />
        <Route path="/history/duvidas" element={<HistDuvidas />} />
        <Route path="/history/test" element={<HistTest />} />

        {/* SCIENCE ROUTES */}
        <Route path="/science/tpc" element={<ScienceTPC />} />
        <Route path="/science/duvidas" element={<ScienceDuvidas />} />
        <Route path="/science/test" element={<ScienceTest />} />

        {/* REDIRECIONAMENTOS DE SEGURANÇA */}
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}