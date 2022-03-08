import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { GitHub } from '../pages/GitHub';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/github" element={<GitHub />} />
    </Routes>
  );
};
