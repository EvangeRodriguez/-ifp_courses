import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import A3dPage from './assets/pages/courses/A3dPage';
import AfiPage from './assets/pages/courses/AfiPage';
import AsirPage from './assets/pages/courses/AsirPage';
import CaePage from './assets/pages/courses/CaePage';
import CiPage from './assets/pages/courses/CiPage';
import DamPage from './assets/pages/courses/DamPage';
import DasPage from './assets/pages/courses/DasPage';
import DawPage from './assets/pages/courses/DawPage';
import DjPage from './assets/pages/courses/DjPage';
import EdiPage from './assets/pages/courses/EdiPage';
import GadPage from './assets/pages/courses/GadPage';
import HbPage from './assets/pages/courses/HbPage';
import IabgPage from './assets/pages/courses/IabgPage';
import MkpPage from './assets/pages/courses/MkpPage';
import ProPage from './assets/pages/courses/ProPage';
import ReaPage from './assets/pages/courses/ReaPage';
import SmxPage from './assets/pages/courses/SmxPage';
import TylPage from './assets/pages/courses/TylPage';
import VdjPage from './assets/pages/courses/VdjPage';

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