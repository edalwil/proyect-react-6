import { HashRouter, Routes, Route } from "react-router-dom";
import { Home,Purchase,ProductDatail } from "./pages";
import {Loading, Header} from "./components/";
import './App.css';
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";



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
			<Route element={<ProtectedRoutes />}>
				<Route path="/news/:id" element={<ProductDatail/>} />
				<Route path="/favorites" element={<Purchase />} />
			</Route>
			</Routes>
	</HashRouter>
    </div>
  );
}

export default App;
