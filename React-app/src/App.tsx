import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert/>
    </div>
  );
}

export default App;
