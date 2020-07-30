import React from 'react';
import useWebAnimations ,{slideInDown} from "@wellyshen/use-web-animations";
import './App.css';
import p1 from './a3.png';
import p2 from './a1.png';
// import p3 from './a2.png';
// import p4 from './a4.png';
import p5 from './a5.png';
import p6 from './a6.png'; 
import logo from './logo.png';

function App() {
  const navAnim = useWebAnimations({...slideInDown});
  const img1 = useWebAnimations({
    keyframes:[
      {transform: 'scale(1)'},
      {transform: 'scale(1.15)'}
    ],
    timing:{
      duration:3000,
      iterations:Infinity,
      direction:"alternate",
      easing: 'ease-in-out'
    }
  });

  return (
    <div>
      <div className='mainNav' ref={navAnim.ref}>
        <a href='./'><img src={logo} alt='logo' style={{width:'130px'}}/></a>
        <div className='nav'>
          <div>Home</div>
          <div>Our Services</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>

      <div className='main text' style={{marginTop:60}}>
      <img src={p1} alt='illustration' ref={img1.ref} style={{minWidth:'300px', maxWidth:'40vw'}}/>
        <div style={{minWidth:'300px', maxWidth:'34vw'}}>
          <h1>Innovative and intelligent
          technology solutions
          and services</h1>
          <div style={{textAlign:"center"}}><button>Product Management</button></div>
        </div>
      </div>

      <div className='section1 text'>
        <div style={{textAlign:"center"}}>
          <img src={p2} alt='illustration' style={{minWidth:'300px', maxWidth:'40vw'}}/>
          <div style={{minWidth:'300px', maxWidth:'34vw'}}>
            <h1>Customized solutions
                to meet the needs of
                the changing market</h1>
            <div style={{textAlign:"center"}}><button>Revenue Cycle Management</button></div>
          </div>
        </div>
        <div style={{textAlign:"center"}}>
          <img src={p2} alt='illustration' style={{minWidth:'300px', maxWidth:'40vw'}}/>
          <div style={{minWidth:'300px', maxWidth:'34vw'}}>
            <h1>Customized solutions
                to meet the needs of
                the changing market</h1>
            <div style={{textAlign:"center"}}><button>Revenue Cycle Management</button></div>
          </div>
        </div>
      </div>
       
      <div className='section2 text'>
        <div style={{minWidth:'300px', maxWidth:'34vw'}}>
          <h1>Customized solutions
              to meet the needs of
              the changing market</h1>
          <div style={{textAlign:"center"}}><button>Revenue Cycle Management</button></div>
        </div>
        <img src={p2} alt='illustration' style={{minWidth:'300px', maxWidth:'40vw'}}/>
      </div>

      <div className='section1 text'>
        <div className='cols'>
          <img src={p5} alt='illustration' style={{width:'100%'}}/>
          <div style={{textAlign:"center"}}> test</div>
        </div>
        <div className='cols'>
          <img src={p6} alt='illustration' style={{width:'100%'}}/>
          <div style={{textAlign:"center"}}> test</div>
        </div>
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
