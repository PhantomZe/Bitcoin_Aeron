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
      <div className='container all' >
        <div className='row'>
				<div className='col-lg-3'>
          <div className='list-group mylist'>
          <Link to ='/tabelharga' className="list-group-item">Tabel Harga Bitcoin </Link>
          <Link to ='/RptoBit' className="list-group-item">Konversi Nilai RP ke BitCoin </Link>
          <Link to ='/BittoRp' className="list-group-item">Konversi Nilai BitCoin ke Rupiah</Link>
          </div>
           
        </div>

        <div className='col-lg-9'>
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
