import DATA from "./DATA/data.json";
import Group from "./components/Group/Group";

function App() {

  const groupLists = Object.keys(DATA);

  return (
    <header>
      <h1>Kodluyoruz React Bootcamp</h1>
      {groupLists.map(group => <Group groupName={group} members={DATA[group]} />)}
    </header>
  );
}

export default App;
