import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav';
import { Cards } from './Cards';
export const TabPane = (props) => {
    let past=[], upcomming=[], rides = props.rides, dt = new Date(), loc = props.loc;
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [tb, setTb] = useState(0);
  
    if(city && state){
        let x =[];
        props.rides.forEach((item)=>{
            if(city === item.city && state===item.state){
                x.push(item);
            }
        })
        rides=x;
    }
    else if(city){
        let x =[];
        props.rides.forEach((item)=>{
            if(city === item.city){
                x.push(item);
            }
        })
        rides=x;
    }
    else if(state){
        let x =[];
        props.rides.forEach((item)=>{
            if(state === item.state){
                x.push(item);
            }
        })
        rides=x;
    }
    if(rides)
    rides.forEach(item => {
       let x = new Date(item.date), y = new Date();
       if(x.getTime() < y.getTime()){
           past.push(item);
       }
       else{
        upcomming.push(item);
       }
    });
    

 rides.forEach(item => {
     let x = Math.abs(item.origin_station_code - loc);

     item.station_path.forEach(element => {
         x = Math.min(x, Math.abs(element - loc));
     })
     item['distance'] = x;
 })
 rides.sort(function(a,b){
   
     return (a.distance - b.distance);
 })
 let current = [];
 if(tb === 0)  current = rides;
 else if(tb == 1) current = upcomming;
 else current=past;
  return (
      <>
    <Nav variant="tabs" defaultActiveKey="link-0">
  <Nav.Item onClick={()=> setTb(0)}>
    <Nav.Link eventKey="link-0">Nearest rides</Nav.Link>
  </Nav.Item>
  <Nav.Item onClick={()=> setTb(1)}>
    <Nav.Link eventKey="link-1">Upcomming rides ({upcomming.length})</Nav.Link>
  </Nav.Item>
  <Nav.Item onClick={()=> setTb(2)}>
    <Nav.Link eventKey="link-2">Past rides({past.length})</Nav.Link>
  </Nav.Item>

</Nav>
{
    props.rides ? (<div style={{marginTop: '15px', textAlign:'center'}}><select value={city} onChange={e=> {setCity(e.target.value); props.rides.forEach((item) => {if(item.city === e.target.value) {setState(item.state); return;}})}}>
    <option value={''}>City</option>
    {
        props.rides.map((item, ind)=>{
            return <option value={item.city} key = {ind}>{item.city}</option>
        })
    }
</select >     

<select style={{marginLeft:'10px'}} value={state} onChange={e=> {setState(e.target.value); setCity('')}}>
    <option value={''}>State</option>
    {
        props.rides.map((item, ind)=>{
            return <option value={item.state} key = {ind}>{item.state}</option>
        })
    }
</select >


</div>) : null
}
{
  current.length ?   (current.map((item, index)=>{
    return (<Cards dt={dt.toString()} ride={item} key={index} distance={item.distance}/>)
})) : <h1 style={{marginTop: '10%', textAlign:'center'}}>No Rides</h1>
}
</>
  )
}
