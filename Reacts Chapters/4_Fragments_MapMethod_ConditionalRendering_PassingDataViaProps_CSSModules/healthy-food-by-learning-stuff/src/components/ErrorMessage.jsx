const ErrorMessage = ({ items }) => {
  //   let foodItems = [
  //     "Kaju Paneer",
  //     "Paneer Masala",
  //     "Mix Veg",
  //     "Mashroom fry",
  //     "Paneer Tikka",
  //     "Masala Bhendi",
  //   ];
  return (
    <>{items.length === 0 && <h3>Food Menu's are Empty, and I'm Hungry</h3>}</>
  );
};

export default ErrorMessage;
