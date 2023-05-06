import './App.css';

function App() {
  let API_KEY='384746ca137e46f1acf0a0891054122d'
  async function getRecipes() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=100&apiKey=${API_KEY}`
    );
  
    const data = await response.json();
  
    return data.recipes;
  }
  var Recipies:any={}
  getRecipes().then((value)=>{
    console.log(value,'11111.....')
  })
  console.log(Recipies)
  return (
    <div className="App">

    </div>
  );
}

export default App;
