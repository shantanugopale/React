function Random() {
  let number = Math.random() * 1000;
  return (
    <div>
      <h3>My Value is {Math.round(number)}</h3>
    </div>
  );
}

export default Random;
