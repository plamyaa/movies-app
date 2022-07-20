import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Details from './routes/Details';
import { Content } from './components/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { SearchPage } from './components/SearchPage/SearchPage';
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Content />}> </Route>
                    <Route path="movie/:filmId" element={<Details />} />
                    <Route path="search" element={<SearchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>

);
