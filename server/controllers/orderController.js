const Orders = require('../models/OrderModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')


const orderController = {
    getOrders: async(req, res) =>{
        try {
            const orders = await Orders.find()
            res.json( orders)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createOrder: async(req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('name email')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const {cart, address, total} = req.body;

            const {_id, name, email} = user;

            const newOrder = new Orders({
                user_id: _id, name, email, cart, address , total
            })

            cart.filter(item => {
                return sold(item._id, item.quantity, item.sold)
            })

            
            await newOrder.save()
            res.json({msg: "Order Success!"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    editOrder: async(req, res) => {
         try {
            await Orders.findOneAndUpdate({_id: req.params.oid}, {
                status: true
            })
            res.json({msg: "Order Conformed!"})
        } catch (error) {
            res.json({msg: error.message})
        }
       
    }
}

const sold = async (id, quantity, oldSold) =>{
    await Products.findOneAndUpdate({_id: id}, {
        sold: quantity + oldSold
    })
}

module.exports = orderController