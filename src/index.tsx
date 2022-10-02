import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Test from './pages/Test';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ProvideTheme } from "./hooks/useTheme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ProvideTheme>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/test" element={<Test />} />
              </Routes>
          </BrowserRouter>
      </ProvideTheme>
  </React.StrictMode>
);
