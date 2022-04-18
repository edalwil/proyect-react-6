import "../styles/Header.css"
import 'animate.css';
import LoginUser from "./LoginUser";
import {useState } from "react";
import CarProduct from "./CarProduct";
import { Link } from "react-router-dom";




const Header = () => {

      const [user, setUser] = useState(false);

      return (
            <div className='conteiner-header'>
                  <div className='position-fixed'>
                        <Link to={"/"} className="link-title">
                              <div className='title'>
                                    <p>e-commerce</p>
                              </div>
                        </Link>
                        <div className='container-icon'>
                              {
                                    localStorage.getItem("token") ?
                                    
                                    <div>
                                          <button className='icon' onClick={() => {
                                                setUser(!user)
                                          }}>
                                                <i className="fa-solid fa-user"></i>
                                          </button>
                                          <div  className={` ${user ? "watch" :"close"}`}>
                                                <div  className='user-log-out animate__animated animate__zoomIn'>
                                                      <i className="fa-solid fa-circle-user"></i>
                                                      <div>
                                                      <button onClick={() =>{
                                                            setUser(!user)
                                                            localStorage.setItem("token","")
                                                      }}>log out</button>         
                                                      </div>
                                                </div>  
                                                        
                                          </div>
                                    </div>
                              
                                    :  <LoginUser  />

                              }
                              <div>
                              <Link to={"/favorites"}>
                                    <button className='icon' >
                                          <i className="fa-solid fa-box-archive" ></i>
                                    </button>
                              </Link>
                              
                              </div>
                              <div className="container-car-product">
                                    <CarProduct/>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Header; 