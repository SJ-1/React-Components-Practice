import React from "react";
let App = () =>
{
    let time = new Date();
    time = time.getHours();
    let greeting = " ";

if (time >=5 && time<12)
{
  greeting = <span style={{color : "green"}}> Good Morning</span>;
}
else if (time >= 12 && time < 18) {
  greeting = <span style={{color: 'orange' }}>Good Afternoon</span>;
}
else{
  greeting = <span style={{color : "black"}}>"Good Night"</span>;
}
return(
  <>
    <h1>Hello Sir, {greeting}</h1>
  </>
)
}
export default App;
