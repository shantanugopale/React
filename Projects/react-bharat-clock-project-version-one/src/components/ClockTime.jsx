function ClockTime() {
  let currentDate = new Date();

  return (
    <div>
      <p className="lead">
        This is the current time: {currentDate.toLocaleDateString()} -{" "}
        {currentDate.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default ClockTime;
