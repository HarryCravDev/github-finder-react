import SpinnerIcon from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={SpinnerIcon}
        width={180}
        className="text-center mx-auto"
        alt="Loading icon"
      />
    </div>
  );
}

export default Spinner;
