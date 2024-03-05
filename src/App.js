import { useEffect, useState } from 'react';
import './App.css';
import rocko from './img/rocko.jpeg';

function App() {
  const [barPixeles, setPixeles] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pixeles = Math.round(barra2PositioningPixeles.scrollTop);
      const threshold = 10;

      if (pixeles !== barPixeles && pixeles > threshold && pixeles < 1050 - threshold) {
        setPixeles(pixeles);
      }
    };

    const barra2PositioningPixeles = document.getElementById("barra2");

    if (barra2PositioningPixeles) {
      barra2PositioningPixeles.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (barra2PositioningPixeles) {
        barra2PositioningPixeles.removeEventListener('scroll', handleScroll);
      }
    };
  }, [barPixeles]);

  return (
    <div className="App">
      <div id='barra' className='barra' style={{ top: `${barPixeles}px` }}></div>
      <div
        id='barra2'
        className='barra2'
        style={{ overflowY: 'auto', height: '1000px', fontSize: 0, }}
      >
        {/* For example, you can add some content to make it scrollable */}
        <div style={{ height: '2000px', background: 'blue' }}>
          {[...Array(10)].map((_, index) => (
            <img key={index} src={rocko} style={{ verticalAlign: 'top' }} alt={`Rocko ${index + 1}`} />
          ))}
        </div>
      </div>
      <div>{barPixeles}</div>
    </div>
  );
}

export default App;





