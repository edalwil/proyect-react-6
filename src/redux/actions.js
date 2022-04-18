import axios from "axios"

export const actions = {
      getProducts : "GET_PRODUCTS",
      inLoading : "IN_LOADING",
      setCategory : "SET_CATEGORY",
      setValidateUser : "SET_VALIDATE_USER",
      setCard: "SET_CARD",
      getCard: "GET_CARD"
}

export const getProducts = product =>( {
      type: actions.getProducts,
      payload: product
})

export const inLoading = loading => ({
      type: actions.inLoading,
      payload: loading
})

export const setSearchProduct = id => ({
      type: actions.setCategory,
      payload: id
})

export const setValidateUser = user => ({
      type: actions.setValidateUser,
      payload: user
})

export const setCard = card => ({
      type: actions.setCard,
      payload: card
})


export const getCard = card => ({
      type: actions.getCard,
      payload: card
})

// token


const getConfig = () => ({
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  });


//   thanks


export const getProductsThunks = () => {
      return dispatch =>{
            dispatch(inLoading(true))
        return    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
                  .then(res => dispatch(getProducts(res.data?.data?.products)))
                  .finally(() => dispatch(inLoading(false)))
      }
}

export const setSearchProductThunks = id => {
return dispatch =>{
      dispatch(inLoading(true))
      return    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${id}`)
                .then(res => dispatch(getProducts(res.data?.data?.products)))
                .finally(() => dispatch(inLoading(false)))
    }
}

export const setProductIdThunks = id => {
      return dispatch =>{
            dispatch(inLoading(true))
            return    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
                      .then(res => dispatch(getProducts(res.data?.data?.products)))
                      .finally(() => dispatch(inLoading(false)))
          }
}

export const setProductCategotyThunks = id => {
      return dispatch => {
            dispatch(inLoading(true))
            return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`)
                  .then(res => dispatch(setSearchProduct(res.data?.data?.products)))
                  .finally(() => dispatch(inLoading(false)))
      }
}

export const loginUserThunks = user => {
      return dispatch => {
            dispatch(inLoading(true))
            return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login/", user)
                  .then (res =>   localStorage.setItem("token" , res.data?.data?.token))
                  .finally(() => dispatch(inLoading(false)))

      }
}

export const newUserThunks = user => {
      return dispatch => {
            dispatch(inLoading(true))
            return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users", user )
                  .finally(() => dispatch(inLoading(false)))
      }
}

export const getCardThunks = () => {
      return dispatch => {
            dispatch(inLoading(true))
            return axios.get ("https://ecommerce-api-react.herokuapp.com/api/v1/cart/", getConfig() )
                  .then(res =>( 
                        dispatch(getCard((res.data?.data?.cart?.products),
                  ))))
                  .finally(() => dispatch(inLoading(false)))

      }
}

export const deleteProductCardThanks = id => {
      return dispatch => {
            dispatch(inLoading(true))
            return axios.delete (`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig() )
                  .finally(() => dispatch(inLoading(false)))
      }
}

export const addProductCardThanks = id => {
      return dispatch => {
            dispatch(inLoading(true))
            return axios.post ("https://ecommerce-api-react.herokuapp.com/api/v1/cart",id, getConfig() )
                  .finally(() => dispatch(inLoading(false)))
      }
}
