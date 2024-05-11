import './App.css';
import { Landing } from "./pages/Landing"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <RecoilRoot>
      <div style={{ backgroundColor: "black" }} className='full-height-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <section className="container-fluid back full-height-container" id="Landing" style={{ backgroundColor: "black" }}>
                <Landing/>
              </section>
            }/>
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  )
}

