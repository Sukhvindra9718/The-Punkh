import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Videos from './SuperAdmin/Videos/Videos';
import VideoPlayer from './Components/VideoPlayer';
import Dashboard from './SuperAdmin/AdminPanel/AdminPanel';
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/videos' element={<Videos />} />
          <Route path='/videos/:id' element={<VideoPlayer />} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
