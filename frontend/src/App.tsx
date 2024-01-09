import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import A3dPage from './pages/courses/A3dPage';
import AfiPage from './pages/courses/AfiPage';
import AsirPage from './pages/courses/AsirPage';
import CaePage from './pages/courses/CaePage';
import CiPage from './pages/courses/CiPage';
import DamPage from './pages/courses/DamPage';
import DasPage from './pages/courses/DasPage';
import DawPage from './pages/courses/DawPage';
import DjPage from './pages/courses/DjPage';
import EdiPage from './pages/courses/EdiPage';
import GadPage from './pages/courses/GadPage';
import HbPage from './pages/courses/HbPage';
import IabgPage from './pages/courses/IabgPage';
import MkpPage from './pages/courses/MkpPage';
import ProPage from './pages/courses/ProPage';
import ReaPage from './pages/courses/ReaPage';
import SmxPage from './pages/courses/SmxPage';
import TylPage from './pages/courses/TylPage';
import VdjPage from './pages/courses/VdjPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/a3d' element={<A3dPage />} />
        <Route path='/afi' element={<AfiPage />} />
        <Route path='/asir' element={<AsirPage />} />
        <Route path='/cae' element={<CaePage />} />
        <Route path='/ci' element={<CiPage />} />
        <Route path='/iabg' element={<IabgPage />} />
        <Route path='/dam' element={<DamPage />} />
        <Route path='/das' element={<DasPage />} />
        <Route path='/daw' element={<DawPage />} />
        <Route path='/dj' element={<DjPage />} />
        <Route path='/edi' element={<EdiPage />} />
        <Route path='/gad' element={<GadPage />} />
        <Route path='/hb' element={<HbPage />} />
        <Route path='/mkp' element={<MkpPage />} />
        <Route path='/pro' element={<ProPage />} />
        <Route path='/rea' element={<ReaPage />} />
        <Route path='/smx' element={<SmxPage />} />
        <Route path='/tyl' element={<TylPage />} />
        <Route path='/vdj' element={<VdjPage />} />
      </Routes>
    </div>
  );
}

export default App;