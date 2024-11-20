const AddItem2 = () => {
  let todoName = "Go to College";
  let todoDate = "14/10/2023";
  return (
    <div className="row item-container updated-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button className="btn btn-danger updateButton">Danger</button>
      </div>
    </div>
  );
};

export default AddItem2;
