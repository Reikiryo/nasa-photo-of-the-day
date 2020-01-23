import React, {useEffect} from "react";
import "./App.css";

function App() {
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Fnat6NGYaQR1xNu6JUJYNWenhXMF3mmiBjvxyier&date=2012-03-14')
    .then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
