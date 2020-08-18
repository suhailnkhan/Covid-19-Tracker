import React, { Component } from 'react'
import styles from './App.module.css'
import {Cards , Chart, CountryPicker} from './components'
import {fetchData} from './api'
import img from './images/images.jpeg'
import Footer from './components/Footer/Footer.js'
class App extends Component {

state = {
data : {},
country : ""
}

handleCountryChange = async (country) =>{
console.log(country);
const fetchedData = await fetchData(country);
console.log(fetchedData);

//fetch data 
this.setState({data: fetchedData , country: country} )
//set state

}
async componentDidMount(){

const fetchedData = await fetchData();

this.setState({data : fetchedData})

}


render(){
const {data , country} = this.state;
return (

<div className={styles.container}> 

<img src={img} className={styles.img} alt="covid" />
<Cards data = {data} country = {country} />
<CountryPicker handleCountryChange= {this.handleCountryChange} />
<Chart   data = {data} country = {country}/>
<Footer />
</div>
)
}
}

export default App