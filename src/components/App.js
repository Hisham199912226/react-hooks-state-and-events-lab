import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [themeToggle, setThemeToggle] = useState(false);
  function changeTheme(){
    setThemeToggle((themeToggle) => !themeToggle);
  }
  
  const appClass = themeToggle ? "App dark" : "App light"
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeTheme}>{themeToggle ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
