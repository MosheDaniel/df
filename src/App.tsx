
import './App.css';
import Footer from './components/Footer';
import Message from './components/Massage';
import Message2 from './components/Message2';
import Message3 from './components/Message3';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  const myName: string = "Moshe Daniel"
  const num: number = 6
  const imgURL: string=  "https://play-lh.googleusercontent.com/YhNDu--BDZ1HuqI0cePotepNhcywVUE1mTFQ6vqCPIBvyb-YjWuIhzop163QVBNu4g0"  
  const year: number =2022;

const isAdmin: boolean = true

  // פונקציה שלא מקבלת פרמטר
  const handleWelcome = ()=>{
    console.log(myName);   
  }
    // פונקציה שכן מקבלת פרמטר
  const handleClickMe = (name: string)=>{
console.log(name);
  }

  const handleInput = (value: string)=>{
    console.log(value);
    
  }
  return (
    <div className="App">
    <Navbar/>
    <Message isAdmin={isAdmin}/>
    <Message2 isAdmin={isAdmin}/>
    <Message3 isAdmin={isAdmin}/>
    <Products/>
        <h1 style={{color: "blue", backgroundColor: "green"}}>{myName} {}</h1>
    <p className='pStyle'>You entered {num} time to the site</p>
    <div>{110+11}</div>
    {/* generate some num 1-100 */}
    <div>{Math.random()*100}</div>
   <img src={imgURL} alt="cute giraffe" />

{/*בצורה כזו onClick לפונקציה למעלה שלא מקבלת פרמטר נשתמש ב */}
   <button className='btn btn-success' onClick={handleWelcome}>Welcome</button>
   {/*בצורה כזו onClick לפונקציה למעלה שכן מקבלת פרמטר נשתמש ב */}
   <button className='btn btn-danger' onClick={()=>handleClickMe("Moshe")}>click me</button>

   {/*value מופעלת על כל תגית שמקבלת onChange() */}
   {/* בכל שינוי שיהיה באינפוט נקבל זאת בקונסול */}
   {/* target=מתעד מה השתנה. נשתמש בזה בטפסים כהמשתמש יכניס פרטים ונרצה לקחת אותם */}
<input type="text"
placeholder='enter your user name'
onChange={(e)=> handleInput(e.target.value)}
/>




   <Footer myName={myName} year={year}/>
    </div>
  );
}

export default App;
