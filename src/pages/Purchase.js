import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesThanks } from '../redux/actions';
import { Link } from "react-router-dom";



const Purchase = () => {

      const dispatch = useDispatch()
      
      const purchases = useSelector(state => state.purchases)
     console.log(purchases);

      useEffect(() => {
            dispatch(getPurchasesThanks())
      }, [dispatch]);



      return (
            <div>

                  <div className="home">
                        <Link to="/" className="link">Home</Link>
                        <p></p>
                        <p><b>purchases</b></p>
                  </div>
                  <h3>My  purchases</h3>
                  <div>
                        {
                              purchases.map(purchase => (
                                    <div key={purchase.id}>
                                          <h4>{purchase.createdAt}</h4>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
};

export default Purchase;