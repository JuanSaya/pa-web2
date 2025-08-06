
import React, { useState } from 'react';
function Calculadora() {
  const [operacion, setOperacion] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const operar = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operacion) {
      case 'suma':
        setResultado(a + b);
        break;
      case 'resta':
        setResultado(a - b);
        break;
      case 'multiplicacion':
        setResultado(a * b);
        break;
      case 'division':
        setResultado(b !== 0 ? a / b : 'Error');
        break;
      case 'seno':
        setResultado(Math.sin(a).toFixed(4));
        break;
      case 'coseno':
        setResultado(Math.cos(a).toFixed(4));
        break;
      case 'tangente':
        setResultado(Math.tan(a).toFixed(4));
        break;
      default:
        setResultado('Seleccione una operación');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>

      <div className="opciones">
        {[
          { label: 'Suma', value: 'suma' },
          { label: 'Resta', value: 'resta' },
          { label: 'Multiplicación', value: 'multiplicacion' },
          { label: 'División', value: 'division' },
          { label: 'Seno', value: 'seno' },
          { label: 'Coseno', value: 'coseno' },
          { label: 'Tangente', value: 'tangente' },
        ].map((op) => (
          <div key={op.value} className="opcion">
            <label>{op.label}</label>
            <input
              type="radio"
              name="operacion"
              value={op.value}
              onChange={(e) => setOperacion(e.target.value)}
            />
          </div>
        ))}
      </div>

      <input
        type="number"
        placeholder="Primer número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        disabled={['seno', 'coseno', 'tangente'].includes(operacion)}
      />
      <input
        type="text"
        placeholder="Resultado"
        value={resultado}
        disabled
      />

      <button onClick={operar}>Operar</button>
    </div>
  );

}
export default Calculadora;
