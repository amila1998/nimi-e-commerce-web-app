import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState';
import './history.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderDetails() {
    const state = useContext(GlobalState);
    const [history] = state.userAPI.history;
    const [orderDetails, setOrderDetails] = useState([]);
    const [isAdmin] = state.userAPI.isAdmin;
    const [token] = state.token;

    const params = useParams();

  

    useEffect(() => {
        if(params.id){
            history.forEach(item =>{
                if(item._id === params.id) setOrderDetails(item)
            })
        }
    },[params.id, history])

    const handleclick = async ()=>{
        if(isAdmin){ 
            try {
                const res = await axios.put(`/api/order/${params.id}`, {
                    headers: {Authorization: token}
                });
            
                toast.success(res.data.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
          
                
            } catch (error) {
                
                toast.error(error.response.data.msg, {
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

    if(orderDetails.length === 0) return null;

    return (
        <div className="history-page">
             <ToastContainer/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>created At</th>
                        <th>updated At</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orderDetails.name}</td>
                        <td>{orderDetails.address}</td>
                        <td>{orderDetails.total}</td>
                        <td>{orderDetails.createdAt}</td>
                        <td>{orderDetails.updatedAt}</td>
                        
                        <td>{orderDetails.status?("Conformed"):(isAdmin?<button onClick={handleclick}>Conform</button>:"Processing")}</td>
                    </tr>
                </tbody>
            </table>

            <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.cart.map(item =>(
                        <tr key={item._id}>
                            <td><img src={item.images.url} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>$ {item.price * item.quantity}</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default OrderDetails;