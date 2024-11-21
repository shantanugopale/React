import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import styles from "./App.module.css";
function App() {
  let foodItems = [
    "Kaju Paneer",
    "Paneer Masala",
    "Mix Veg",
    "Mashroom fry",
    "Paneer Tikka",
    "Masala Bhendi",
  ];
  // let foodItems = [];
  return (
    <>
      <h1 className={`${styles["updated-heading"]}`}>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
