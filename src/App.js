import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentList from './components/AppointmentList';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppointmentList />} />
        <Route path="/new" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
