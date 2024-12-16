import Header from "./components/Header";
import Info from "./components/Info";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Header logoText="My First React App" />
      <Welcome greeting="Hello!" />
      <Info firstname="Kazuchika" lastname="Yanagi" age={28} isStudent={true} />
    </div>
  );
};

export default App;
