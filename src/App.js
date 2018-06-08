import React, { Component } from 'react';
import './App.css';



import {Link,Route} from 'react-router-dom'



import Tabelharga from './komponen/Tabelharga'
import BittoRp from './komponen/BittoRp'
import RptoBit from './komponen/RptoBit'
import Home from './komponen/Home'

class App extends Component {
  render() {
    return (
      <div className='col-md-12' >
        <div className='col-md-12 row'>
				<div className='col-md-3'>
        <h1>List Bitcoin</h1>
          <div className='list-group'>
          <Link to ='/tabelharga' className="list-group-item"><center>Tabel Harga Bitcoin </center></Link>
          <Link to ='/RptoBit' className="list-group-item"><center>Konversi Nilai RP ke BitCoin </center></Link>
          <Link to ='/BittoRp' className="list-group-item"><center>Konversi Nilai BitCoin ke Rupiah</center></Link>
          </div>
           
        </div>

        <div className='col-md-9'>
          <Route exact path='/' component={Home} />
          <Route path='/tabelharga' component={Tabelharga} />
          <Route path='/RptoBit' component={RptoBit} />
          <Route path='/BittoRp' component={BittoRp} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
