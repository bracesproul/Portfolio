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
import axios from "axios";
import moment from "moment/moment";
import dotenv from 'dotenv';

function handleSendWebhook() {
    axios.get('https://geolocation-db.com/json/')
        .then((res) => {
            // if (res.data.IPv4 === '23.93.79.212') return undefined;
            axios.get(`https://ip-api.com/json/${res.data.IPv4}`)
                .then(({ data }) => {
                    const url = process.env.REACT_APP_DISCORD_URL || process.env.NEXT_PUBLIC_DISCORD_URL
                    const jsonPayload = {
                        embeds: [
                            {
                                title: "New Visit",
                                description: `Someone just visited the site! IP: ***${res.data.IPv4}***`,
                                fields: [
                                    {
                                        name: "City",
                                        value: data.city || 'Unknown',
                                        inline: true
                                    },
                                    {
                                        name: "State",
                                        value: data.regionName || data.region || 'Unknown',
                                        inline: true
                                    }
                                ],
                                color: 65280,
                                footer: {
                                    text: 'Portfolio Bot'
                                },
                                timestamp: new Date().toISOString()
                            }
                        ]
                    }
                    axios.post(url!, jsonPayload, {
                        headers: { 'Content-Type': 'application/json' },
                    })
                        .then(res => console.log(res))
                        .catch(err => console.log(err))
                })
        })
        .catch((err) => {
            console.error('error getting location', err)
        })
}

function checkNewUser() {
    if (localStorage.getItem('isNewPortfolioVisitor') !== null && (moment().diff(localStorage.getItem('isNewPortfolioVisitor'), 'hours') <= 24) ) {
        console.log('visited within 24 hours');
        return undefined;
    }
    console.log('new visitor');
    localStorage.setItem('isNewPortfolioVisitor', `${moment()}`);
    handleSendWebhook();
}

checkNewUser();


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
