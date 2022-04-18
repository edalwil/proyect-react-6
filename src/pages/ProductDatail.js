import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsThunks, setProductCategotyThunks } from "../redux/actions";
import { Link } from "react-router-dom";
import "../styles/ProductDatail.css"


const ProductDatail = () => {
	const productId = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
      const category = useSelector((state) =>state.category )
    

	useEffect(() => {
		dispatch(getProductsThunks());
	}, [dispatch]);

	const detalleProducts = products.find(
		(detalleProduct) => detalleProduct.id === Number(productId?.id)
      );


      console.log(detalleProducts?.category);
      useEffect( () => {
            if (detalleProducts?.category?.id) {
                dispatch(setProductCategotyThunks(detalleProducts?.category?.id))
            }
      },[detalleProducts?.category?.id, dispatch])





	return (
		 <div className="container-product-detail">
                  <div className="home">
                        <Link to="/" className="link">Home</Link>
                        <p></p>
                        <p>{detalleProducts?.category?.name}</p>
                  </div>
                  <div className="images">
                         <button> <i className="fa-solid fa-backward" style={{color:" white"}}></i></button>
                         <div className="container-img-detail">
                              <img src={detalleProducts?.productImgs?.[0]} alt="" />     
                         </div>
                         <button><i className="fa-solid fa-forward" style={{color:" white"}}></i></button>
                  </div>
                  <div className="conteiner-title">
                         <h2>{detalleProducts?.title}</h2>
                         <div className="flex light-grey">
                              <p>Price</p>
                              <p>Quantity</p>
                         </div>
                         <div className="flex price">
                               <p>{detalleProducts?.price}</p>
                               <p></p>
                         </div>
                  </div>
                  <div className="container-card">
                              <button className="card-shopping">Add to card <i className="fa-solid fa-cart-shopping" style={{color:" white"}}></i> </button>
                  </div>
                  <p>{detalleProducts?.description}</p>
                  <h3>Discover similar items</h3>
                  <div className="container-items-similar">
                        {
                              category.map(category => (
                                    <div key={category.id} className="products">
							<Link to={`/news/${category.id}`} className="link-product">
								<div className="img">
									<img src={category.productImgs?.[0]} alt="" />
								</div> 
								<div className="info" > 
									<strong className="product-inf">{category.title}</strong>
									<p>price</p>
									<p>${category.price}</p>
								</div>
							</Link>
							<button className="button-card-home"><i className="fa-solid fa-cart-shopping" style={{color:" white"}}></i> </button>
						</div>
                              ))
                        }
                  </div>
		</div>
            
	);
};

export default ProductDatail;
