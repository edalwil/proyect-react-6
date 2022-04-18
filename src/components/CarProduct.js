import { useDispatch, useSelector } from 'react-redux';
import { deleteProductCardThanks, getCardThunks, setCard } from '../redux/actions';
import "../styles/CarProduct.css"


const CarProduct = () => {

      const card = useSelector(state => state.card)
      const getCard = useSelector(state => state.getCard)

      const dispatch = useDispatch()

      const buttonAddCar = () => {
            dispatch(setCard(!card))
            dispatch(getCardThunks())
      }


    const deleteProductCard = id => {
          dispatch(deleteProductCardThanks(id))
          dispatch(setCard(!card))
    }


      return (
            <>
                  <button className='icon'  onClick={() => buttonAddCar()}>     
                        <i className="fa-solid fa-cart-plus"></i>
                  </button> 
                  {
                  card &&
                  <div className={`${card} ? card-container-open : card-container-close`}> 
                        {
                              localStorage.getItem("token") 
                              ?
                              ( 
                                    <div className='card'>
                                          <div className='card-scroll'>
                                                <h2 className='title-card'>Carrito de compras</h2>                                    
                                                {
                                                      getCard.map( card => (
                                                            <div key={card.id} className="container-map">
                                                                  <div className='card-flex'>
                                                                        <h4>{card.brand}</h4>
                                                                        <button className='button-delete' onClick={() => deleteProductCard(card.id)}><i className="fa-solid fa-trash"></i></button>
                                                                  </div>
                                                                  <div className='card-title'>
                                                                        <h4>{card.title}</h4>
                                                                  </div>
                                                            </div>
                                                      ))
                                                }
                                          </div>
                                          <div>
                                                <div className='container-cheackout'>
                                                      <p>total:</p>
                                                      <h5>precio</h5>
                                                </div>
                                                <div>
                                                      <button>Cheackout</button>
                                                </div>
                                          </div>
                                    </div>
                              )
                              :
                              <p>user no conect</p>
                        }
                  </div>
                  }
           </>
      );
};

export default CarProduct; 