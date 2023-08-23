import {useState} from "react";
import {data} from "./data";
import './App.css';

function App() {
const [showText, setShowText] = useState(false);

const [places, setPlaces] = useState(data);
//const [showMore, setShowmore] = useState(false);


const removePlace = (id) => {
  let newPlace = places.filter(place => place.id !== id);
  setPlaces(newPlace)
}

const showTextClick = (item) => {
  item.showMore = !item.showMore
  setShowText(!showText)
}

  return (
    <div>
      
<div className="container">
  <h1>List of {places.length} places to visit in North of France</h1>
</div>

{places.map((item => {
  const {id, name, image, description, showMore} = item;

  return (
    <div key={id}>
<div className="container"> 
<h2>{id} - {name}</h2>
</div>

<div className="container"> 
<img src={image} width="300px" alt="place" />
</div>

<div className="container"> 
<p>{showMore ? description : description.substring(0, 80) + "..."} <button onClick = { () => showTextClick(item)}> {showMore ? "Show less" : "Show more"}</button></p>
</div>

<div className="container btn">
<button onClick = {() => removePlace(id) }>Remove item</button>
</div>


    </div>
  )
}))}

<div className="btn container ">
<button onClick = { () => setPlaces([])}>Remove all</button>
</div>



    </div>
  );
}

export default App;
