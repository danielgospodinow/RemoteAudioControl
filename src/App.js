import React, { Component } from 'react';
import { Slider } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

document.addEventListener('touchmove', function (e) {
   e.preventDefault();
}, { passive: false });

function onChange(value) {
   fetch(`http://192.168.0.10:2999/?volume=${value}`);
}

class App extends Component {
   render() {
      return (
         <div style={{ height: "70vh", position: "absolute", marginLeft: "46%", marginTop: "10%" }}>
            <Slider onChange={onChange} vertical tipFormatter={(value) => `${value}%`} />
         </div>
      );
   }
}

export default App;
