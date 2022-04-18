import React, { useState } from 'react';
import "../styles/Filter.css"
import { useEffect } from 'react';
import axios from 'axios';
import { setSearchProductThunks, } from '../redux/actions';
import { useDispatch } from 'react-redux';
import "animate.css"


const Filter = ({setOnFilter}) => {

      const [categoryFilter, setCategoryFilter] = useState([])
      const dispatch = useDispatch()
      const [filter, setFilter] = useState(false)
      const [clas, setClas] = useState("")

      useEffect( () => {
             axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
                  .then(res => setCategoryFilter(res?.data?.data?.categories))
      }, []);

      
      const buttonFilterCategory = (id) => {
            dispatch(setSearchProductThunks(id))
      }

      useEffect(() => {
            if (filter) {
                  setClas("container-category-over")
            }else{
                  setClas("conteiner-category")
            }
      },[filter])

      const buttonFilter = (id) => {
            return(
                  setOnFilter(false),
                  buttonFilterCategory(id)
            )
      }
            
      return (
            <div className='container-filter'>
                  <div className='container'>
                        <button className='img-x' onClick={() => setOnFilter(false)}>
                              <i className="fa-solid fa-x" style={{color: "black"}}></i>
                        </button>
                        <h3 className='title-filter'>Filter</h3>
                        <div className={clas}>
                              <div className='category-p'  onClick={() => setFilter(!filter)}>
                                    <h3>Category</h3>
                                    
                                    <i className="fa-regular fa-arrow-down"></i>
                              </div>
                              <div className='map-category'>
                                    {
                                          categoryFilter.map(category => (
                                                <div key={category.id} className="map-id">
                                                      <button className='button-category' onClick={()=> buttonFilter(category.id)}>{category.name}</button>
                                                </div>
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Filter;