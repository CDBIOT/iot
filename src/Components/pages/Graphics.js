import styles from "../../styles/Graphics.module.css"
import React from "react";
import axios from "axios";
import {useEffect, useState} from 'react';
import _ from 'lodash'; 
import moment from "moment/moment";
import Grafico from "../Grafico";

function Graphics(){
    
    const [temps, setTemperaturas] = useState([])
    const [dia,setFilDia] = useState(temps)
    const [query,setQuery] = useState("")
    const [initDate, setInitDate] = useState()
    const [finalDate, setFinalDate] = useState()

  const set = (dia,e) => {
    e.preventDefault()
    return temps.filter(item=> item.dia.includes(query))
    }

const dias =temps.map((t, i) =>{return temps.indexOf(t.dia)===i})

const startDate = moment(initDate).format("DD-MM-YYYY");
const endDate = moment(finalDate).format("DD-MM-YYYY");
 
async function getData(){
    
// const loadData = (data) =>{
//     const values = _.groupBy(data, () => {
//         return values.temps
//     })}

     fetch(`https://server-orpin-zeta.vercel.app/temps`,{
      method: 'GET',
      header: { 'Access-Control-Allow-Origin':'*',mode: 'cors',
        'Content-Type': 'application/json' },
     }).then(resp=>resp.json())
 	.then((data)=>{ setTemperaturas(data.temps)
     console.log(data.temps)
     }).catch(err=> console.log(err))
  //const values = _.groupBy(temps, () => { return values.temps });
    }
// async function getData(){
//    await axios.get('https://server-orpin-zeta.vercel.app/temps')
//         .then(response => setTemperaturas(response.data))
//         .catch(err=> console.log(err))
//         console.log(data)
//         }

useEffect(() => {
    getData();
    }, [])
    
return (
    <>
    <h1>Graphics</h1>
    <input type ="text" onChange={(e)=>setQuery(e.target.value)}>
    </input>

<table>
<th colspan = {4}> <h1> Selecione o período </h1></th>
<tr>
    <td>
        <h2>Data início</h2>
        <input id="initDate" value={""}  type="date" onChange={(e)=>setInitDate(e.target.value)}  name="initDate" /></td>
        <td> <h2 value = {startDate}  size="6" /><h2 for="initDate" className="form-label">{startDate}</h2></td>
    <td>
        <h2>Data Final</h2>
        <input id="finalDate" value={""}  type="date" onChange={(e)=>setFinalDate(e.target.value)}  name="finalDate" /></td>
        <td><h2  value = {endDate}  size="6" /> <h2 for="endDate" className="form-label">{endDate} </h2></td> 
</tr>
</table>
   
        
    <select onChange={e =>setQuery(e.target.value)}>
        <option value="" disabled default selected> Select day  </option>
        {dias.map(dia=>{
            return <option key={dia}> {dia}</option>
        })}
    </select>
    <div>  
        <table className={styles.table}>
        <tr><th className={styles.th} colSpan={4}>
        <td width="20%"className={styles.th}>Temp</td>
        <td width="20%" className={styles.th}>Local</td>
        <td width="20%" className={styles.th}>Dia</td>
        <td width="20%" className={styles.th}>Mes</td>
        <td width="20%" className={styles.th}>Ano</td>
        </th></tr>
    </table>
    </div>
        <tbody className={styles.tbody}>
     
        {temps.length >0 ? (
        temps.map((t, i) => (
        <tr key = {i}>
        <td width="20%"className={styles.td}>{t.temperatura}</td>
        <td width="20%"className={styles.td}>{t.local}</td>
        <td width="20%"className={styles.td}>{t.dia}</td>
        <td width="20%"className={styles.td}>{t.mes}</td>
        <td width="20%"className={styles.td}>{t.ano}</td></tr>
        )
        )) :(
            <h3>Não há itens na lista</h3>
        )}
       
        </tbody>
       
   
    </>
)
    
}
export default Graphics