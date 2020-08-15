import React ,{useState , useEffect }from 'react'
import {fetchDailyData} from '../../api'
import {Line , Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'
const Charts = () => {

const [dailyData, setDailyData] = useState([]);


useEffect(()=> {
   const fetchApi = async () =>{

    setDailyData(await fetchDailyData());
  

   }
   console.log(dailyData);
    fetchApi()


});
const lineChart = (
dailyData.length ?(
<Line 
data ={{
labels:dailyData.map(({date})=> date),
datasets : [{
data : dailyData.map(({confirmed}) => confirmed),
label:"infected",
borderColor : '#3333ff',
fill: true

},{
    data : dailyData.map(({deaths}) => deaths),
label:"infected",
borderColor : '#red',
//backgroundColor: r  (255,0,0,0.5),
fill: true
}]

}}

/>
) : null


)
return (

    <div className="styles.container">
{lineChart}

    </div>
)

}

export default Charts