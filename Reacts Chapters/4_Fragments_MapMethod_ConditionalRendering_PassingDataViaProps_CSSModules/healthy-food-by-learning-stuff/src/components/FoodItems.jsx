import Item from "./Item";

const FoodItems = ({ items }) => {
  //   let foodItems = [
  //     "Kaju Paneer",
  //     "Paneer Masala",
  //     "Mix Veg",
  //     "Mashroom fry",
  //     "Paneer Tikka",
  //     "Masala Bhendi",
  //   ];
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
