import UserResults from "../users/UserResults";
function Home() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. My
        profile here -
        <strong>
          <a href="https://github.com/HarryCravDev"> Harry Craven</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Harry Craven
        </a>
      </p>{" "}
      <UserResults />
    </div>
  );
}

export default Home;
