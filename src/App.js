import Card from "./Components/UI/Card";
import AddUser from "./Components/Users/AddUser";

function App() {
  return (
    <div className="w-screen h-screen bg-background pt-12">
      <Card>
        <AddUser />
      </Card>
    </div>
  );
}

export default App;
