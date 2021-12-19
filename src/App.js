import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as ROUTES from './constants/Routes';

const Dashboard = lazy(() => import ('./pages/Dashboard'));
const Login = lazy(() => import ('./pages/Login'));
const SignUp = lazy(() => import ('./pages/SignUp'));
const Profile = lazy(() => import ('./pages/Profile'));
const NotFound = lazy(() => import ('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
      fallback={<p>Loading content</p>}>
      <Routes>
        <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
        <Route exact path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route exact path={ROUTES.PROFILE} element={<Profile />} />
        <Route exact path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}