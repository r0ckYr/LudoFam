import './App.css';
import { Landing } from "./pages/Landing"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { SpeedInsights } from '@vercel/speed-insights/react';

export function App() {
  return (
      <div style={{
        backgroundImage: "url('back.jpg')",
        position: 'sticky',
        top: '0px'
      }}>
    <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
          </Routes>
        </BrowserRouter>
    </RecoilRoot>
    <SpeedInsights />
      </div>
  )
}

