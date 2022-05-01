import React, {useContext, useEffect} from 'react';
import {GlobalState} from '../../../GlobalState';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './history.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                try {
                    if(isAdmin){
                        const res = await axios.get('/api/order', {
                            headers: {Authorization: token}
                        })
                        setHistory(res.data)
                        
                    }else{
                        const res = await axios.get('/user/history', {
                            headers: {Authorization: token}
                        })
                        setHistory(res.data)
                    }
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
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
              <ToastContainer/>
            <h2>History</h2>

            <h4>You have {history.length} ordered</h4>

            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date of Purchased</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link to={`/history/${items._id}`}>View</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory;