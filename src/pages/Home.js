import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductCardThanks, getProductsThunks, setCard, setSearchProductThunks } from "../redux/actions";
import Filter from "../components/Filter";
import "../styles/Home.css"
import { Link } from "react-router-dom";


const Home = () => {

	const [onFilter, setOnFilter] = useState(false)
	const [productId, setProductId] = useState([]);
	const products = useSelector(state => state.products)
	const card = useSelector(state => state.card)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getProductsThunks())
	}, [dispatch]);

	const sumit = e => {
		e.preventDefault() 
		dispatch(setSearchProductThunks(productId))
	}

	const addProductCard = id => {
		const productId = {
			id: id,
			quantity: 1
		}
		dispatch(addProductCardThanks(productId))
		dispatch(setCard(!card))
		
	}


	const buttonFilter = () => {
		setOnFilter(!onFilter)
	}

	
	return (
		<div>
			<form className="container-input"  onSubmit={sumit}>
				<input type="text"  onChange={e => setProductId(e.target.value)} value={productId}/>
				<button >
					<i className="fa-solid fa-magnifying-glass" style={{color:" white"}}></i>
				</button>
			</form>
			<button className="button-filter" onClick={() => buttonFilter()}>
				<i className="fa-solid fa-filter" style={{color:"black"}} ></i>
				Filter
			</button>
			{
				onFilter && <Filter setOnFilter={setOnFilter}/>
			}
			<div className="container-products">
				{
					products.map(product => (
						<div key={product.id} className="products">
							<Link to={`news/${product.id}`} className="link-product">
								<div className="img">
									<img src={product.productImgs?.[0]} alt="" />
								</div> 
								<div className="info" > 
									<strong className="product-inf">{product.title}</strong>
									<p>price</p>
									<p>${product.price}</p>
								</div>
							</Link>
							<button onClick={() => addProductCard(product.id)}   className="button-card-home"><i className="fa-solid fa-cart-shopping" style={{color:" white"}}></i> </button>
						</div>
					))
				}
			</div>
		</div>
	);
}; 

export default Home;
