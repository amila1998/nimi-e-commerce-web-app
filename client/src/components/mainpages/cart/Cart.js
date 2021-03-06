import React, {useContext, useState, useEffect} from 'react';
import {GlobalState} from '../../../GlobalState';
import axios from 'axios';
import './cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
    const state = useContext(GlobalState)
    const [user] = state.userAPI.user
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const [address, setAddress] = useState("")

    const handleChange = (e) => {
        setAddress(e.target.value);
      };
   

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
       try {
        const res = await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
        toast.success(res.data.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
       } catch (err) {
        toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
       }
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async() => {
        if(address==""){
            toast.warning("Pleace fill the Shipping Address", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }else{
            try {
                const res = await axios.post('/api/order', {cart, total, address}, {
                    headers: {Authorization: token}
                })
                toast.success(res.data.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setCart([])
                    addToCart([])
            
                
            } catch (err) {
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
           
        }

       

        
       
    }


    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

    return (
        <div className='cartMain'> 
               <ToastContainer/>
            <div className='cartL'>
                    <div>
                        <label>Name: {user}</label><br/><br/>
                        <label>Payment Type: Cash on Delivery</label><br/><br/>
                        <label>Shipping Address: </label>
                        <textarea onChange={handleChange}  id='txt1'></textarea>
                    </div>
                    <h3 className="total"> Total: $ {total}</h3>
                    <button  onClick={tranSuccess} > placed an order </button>
 
            </div>
            <div className='cartR'>
           
           {
               cart.map(product => (
                   <div className="cdetail cart" key={product._id}>
                       <img src={product.images.url} alt="" />

                       <div className="cbox-detail">
                           <h2>{product.title}</h2>

                           <h3>$ {product.price * product.quantity}</h3>
                           <p>{product.description}</p>
                           <p>{product.content}</p>

                           <div className="amount">
                               <button onClick={() => decrement(product._id)}> - </button>
                               <span>{product.quantity}</span>
                               <button onClick={() => increment(product._id)}> + </button>
                           </div>
                           
                           <div className="delete" 
                           onClick={() => removeProduct(product._id)}>
                               X
                           </div>
                       </div>
                   </div>
               ))
           }
           </div>

           
        </div>
  
    )
}

export default Cart;

