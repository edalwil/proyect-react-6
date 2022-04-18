import { HashRouter, Routes, Route } from "react-router-dom";
import { Home,Purchase,ProductDatail } from "./pages";
import {Loading, Header} from "./components/";
import './App.css';
import { useSelector } from "react-redux";



function App() {

	const loading = useSelector(state => state.inloading)
	
  return (
    <div className="App" >
  	<HashRouter>
		{
			loading && <Loading/>
		}
		<Header/>
		<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/news/:id" element={<ProductDatail/>} />
		<Route path="/favorites" element={<Purchase />} />
		</Routes>
	</HashRouter>
    </div>
  );
}

export default App;
