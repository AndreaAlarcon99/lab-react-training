import './App.css';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';



function App() {

  const user1 = {
    firstName: "Andrea",
    lastName: "Alarcón",
    gender: "female",
    height: 164,
    birth: new Date("1999-02-05"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
   const user2 = {
    firstName: "Eric",
    lastName: "Tamaral",
    gender: "male",
    height: 178,
    birth: new Date("1998-02-25"),
     picture: "https://randomuser.me/api/portraits/men/44.jpg"
   }
  
  const card1 = {
     type:"Visa",
    number:"0123456789018845",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white"
  }
  return (
    <div className="App">
      
      <IdCard user={user1} />
      <IdCard user={user2} />
      <Greetings lang="de">Anna</Greetings>
      <Greetings lang="fr">Pierre</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard card={ card1} />
    </div>
  );
}

export default App;
