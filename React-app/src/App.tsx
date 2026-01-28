import ListGroup from "./Components/ListGroup/";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";
import { BsFillCalendarFill } from 'react-icons/bs';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <BsFillCalendarFill/>
      {alertVisible &&<Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button  onClick ={() => setAlertVisibility(true) }>Submit</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
