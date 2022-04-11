import React, {useState, useEffect} from 'react'
import './App.css';
import { NavBar } from './Components/NavBar';
import { TabPane } from './Components/TabPane';
import axios from 'axios';
function App() {
const [user, setUser] = useState();
const [rides, setRides] = useState();

useEffect(()=>{
  if(!user)
  axios.get('https://assessment.api.vweb.app/user').then(res=>{
    setUser(res.data);
}).catch(err => console.log(err));
if(!rides){
  axios.get('https://assessment.api.vweb.app/rides').then(res=>{
    setRides(res.data)
}).catch(err => console.log(err));
}
})

  return (
<>

<NavBar user={user}/>

{
  rides && user ? <TabPane loc={user.station_code}  rides = {rides}/> : null
}
</>
  );
}

export default App;
