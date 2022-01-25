import './App.css';
import Dataprovider from './component/Dataprovider';
import Footer from './component/Footer';
import Forminput from "./component/Forminput";
import List from './component/List';

const App = () =>{


return (
    <>
    <Dataprovider>
    <div className="container">
      <h1>To Do App</h1>
      <Forminput/>
      <List/>
      <Footer/>
    </div>   
    </Dataprovider>    
    </>
  );
}

export default App;
