import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    const confirmarAsistencia = async () => {
        await axios.post('https://tu-api-gateway-url.com/confirmar-asistencia', { nombre, telefono });
        alert('¡Asistencia confirmada! Se ha enviado un mensaje de WhatsApp.');
    };

    return (
        <div>
            <h1>Invitación al Evento</h1>
            <input type="text" placeholder="Tu nombre" onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Tu teléfono (+521234567890)" onChange={(e) => setTelefono(e.target.value)} />
            <button onClick={confirmarAsistencia}>Confirmar</button>
        </div>
    );
}

export default App;