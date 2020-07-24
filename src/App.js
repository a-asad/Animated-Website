import React from 'react';
import useWebAnimations ,{flipInX, bounceIn, slideInDown, zoomInDown} from "@wellyshen/use-web-animations";
import './App.css';
import g1 from './a1.gif';
import g3 from './a3.gif';
import g4 from './a4.gif';

function App() {
  const {keyframes, timing} = flipInX;
  const text1 = useWebAnimations({
    keyframes,
    timing:{
      ...timing,
      delay: 200,
      duration: timing.duration*3,
      iterations:Infinity,
    }
  });
  const navAnim = useWebAnimations({...slideInDown});
  const text2anim = useWebAnimations({...bounceIn,
    timing:{
      ...bounceIn.timing,
      duration:4000,
      iterations:Infinity,
    }
  });
  const text3anim = useWebAnimations({...zoomInDown,
    timing:{
      ...zoomInDown.timing,
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
      <div className='nav' ref={navAnim.ref}>
        <div><b>Home</b></div>
        <div><b>Our Services</b></div>
        <div><b>About</b></div>
        <div><b>Contact</b></div>
      </div>
      <div className='main'>
        <div ref={text1.ref} style={{textAlign:"center", color:"blue"}}>
          <h1>RIT Ready: Moving Forward Into Fall</h1>
          <h2>Lets go there</h2>
          <h2>It's built using WAAPI</h2>
        </div>
        <img src={g1} alt='illustration' ref={img1.ref} style={{minWidth:'300px', maxWidth:'40vw'}}/>
      </div>
      <div className='main'>
        <img src={g3} alt='illustration' style={{minWidth:'300px', maxWidth:'50vw'}}/>
        <div ref={text2anim.ref} style={{textAlign:"center", color:"red"}}>
          <h1>The two most powerful warriors are</h1>
          <h1> patience and time.</h1>
          <h2>Leo Tolstoy</h2>
        </div>
      </div>
      <div className='main'>
        <div ref={text3anim.ref} style={{textAlign:"center", color:"red"}}>
          <h1>An investment in knowledge pays the </h1>
          <h1>best interest.</h1>
          <h2>Benjamin Franklin</h2>
        </div>
        <img src={g4} alt='illustration' style={{minWidth:'300px', maxWidth:'50vw'}}/>
      </div>
      <div className='footer'>
        <div>Website created by Abdurrahman Asad</div>
        <div><a href='https://github.com/A-ASAD'>Github</a></div>
        <div><a href='https://pk.linkedin.com/in/abdurrahman-asad-2805741ab'>LinkedIn</a></div>
      </div>
    </div>
  );
}

export default App;
