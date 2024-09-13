import React from 'react';
import './AppointmentList.css';

const appointments = [
    { id: 1, clientName: 'John Doe', date: '2024-09-14', time: '10:00 AM' },
    { id: 2, clientName: 'Jane Smith', date: '2024-09-15', time: '11:00 AM' },
  ];

const AppointmentList = () => {
    return (
        <div className="appointment-list-container">
          <h1 className="title">Agendamiento de citas</h1>
          
          {appointments && appointments.length > 0 ? (
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>Nombre del cliente</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.clientName}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>
                      <button className="btn-view">Ver</button>
                      <button className="btn-cancel">Cancelar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No appointments scheduled.</p>
          )}
        </div>
      );
    };

export default AppointmentList;