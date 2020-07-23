import React from 'react';
import useWebAnimations ,{flipInX, pulse} from "@wellyshen/use-web-animations";
import './App.css';
import g1 from './a1.gif';
import g2 from './a2.gif';

function App() {
  const {keyframes, timing} = flipInX;
  const text1 = useWebAnimations({
    keyframes,
    timing:{
      ...timing,
      delay: 200,
      duration: timing.duration*2,
      iterations:Infinity,
    }
  });
  const text2anim = useWebAnimations({...pulse,
    timing:{
      ...pulse.timing,
      duration:3000,
      iterations:Infinity,
    }
  });
  const img1 = useWebAnimations({
    keyframes:[
      {transform: 'scale(1)'},
      {transform: 'scale(1.1)'}
    ],
    timing:{
      duration:5000,
      iterations:Infinity,
      direction:"alternate",
      easing: 'ease-in-out'
    }
  });

  return (
    <div>
      <div className='main'>
        <div ref={text1.ref} style={{textAlign:"center", color:"blue"}}>
          <h1>Bootcamp Animated Website</h1>
          <h2>Project 4B</h2>
          <h2>Built using WAAPI</h2>
        </div>
        <img src={g1} alt='illustration' ref={img1.ref} style={{minWidth:'300px', maxWidth:'50vw'}}/>
      </div>
      <div className='main'>
        <img src={g2} alt='illustration' style={{minWidth:'300px', maxWidth:'50vw'}}/>
        <div ref={text2anim.ref} style={{textAlign:"center", color:"red"}}>
          <h1>Bootcamp Animated Website</h1>
          <h2>Project 4B</h2>
          <h2>Built using WAAPI</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
