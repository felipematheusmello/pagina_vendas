import './App.css';
import CounterBanner from './components/counte-banner/counter-banner';
import VideoPlayer from './components/video-player/video-player';
import SocialProve from './components/social-prove/social-prove';

function App() {
  return (
    <div className="App">
      <CounterBanner></CounterBanner>
      <div className="text-container">
          BAIXE ESSE APP E RECEBA&nbsp;
          <span className="price">R$ 382,00 POR DIA</span>&nbsp;
          <div className="spacing-my ">(NO MÍNIMO)</div>
          <div>RESPONDENDO PESQUISAS DE EMPRESAS</div>
      </div>
      <VideoPlayer></VideoPlayer>
      <div className="text-container">
          Corra, pois as vagas são limitadas!
      </div>
      <SocialProve></SocialProve>
    </div>
  );
}

export default App;
