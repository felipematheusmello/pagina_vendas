import './App.css';
import CounterBanner from './components/counte-banner/counter-banner';
import VideoPlayer from './components/video-player/video-player';
import SocialProve from './components/social-prove/social-prove';
import imagem from './desconto.jpeg'
import compra from './compra.png'
import { useEffect, useState } from 'react';

function App() {
  const [finishTimer, setFinishTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFinishTimer(true)
    }, 840000)
  }, [])

  const click = () => {
    console.log('clickou')
  }
  return (
    <div className="App">
      <CounterBanner></CounterBanner>
      <div className="text-container">
         <img src={imagem} />
      </div>
      <VideoPlayer></VideoPlayer>
      <div className="text-container">
          Corra pois a oferta é por tempo limitado
          <div>
            <a className='buy' hidden={!finishTimer} href="https://go.perfectpay.com.br/PPU38CN0457">
              <img src={compra} height='80'/>
            </a>
          </div>
      </div>
      <SocialProve></SocialProve>

      <div className="text-footer-container">
          <div>Copyright 2023 - Opinião Certa <span className="copy">®</span></div>
          <div>Todos os direitos reservador</div>
          <div><a className="terms" href="https://www.opinarereceber.shop/co-perfectpay/termos/">Termos de Uso . Privacidade</a></div>
      </div>
    </div>
  );
}

export default App;
