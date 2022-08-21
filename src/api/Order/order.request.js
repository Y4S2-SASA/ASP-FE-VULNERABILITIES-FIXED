import apiInstance from "../apiInstance";

const saveOrder = (payload) =>{
    return apiInstance
        .post(`/orders`, payload)
        .then((response) =>{
            return response;
        })
        .catch((error) =>{
            return error;
        })
};

const getUserOrders = (buyer) =>{
    return apiInstance
        .get(`/orders/users/${buyer}`)
        .then((response) =>{
            return response;
        })
        .catch((error) =>{
            return error;
        })
}

const getUserOrder = (id) =>{
    return apiInstance
        .get(`/orders/${id}`)
        .then((response) =>{
            return response;
        })
        .catch((error) =>{
            return error;
        })
}

const updateOrderDetails = (id, payload) =>{
    return apiInstance
        .put(`/orders/${id}`, payload)
        .then((response) =>{
            return response;
        })
        .catch((error) =>{
            return error;
        })
}

const orderRequest = {
    saveOrder,
    getUserOrders,
    getUserOrder,
    updateOrderDetails,
}

export default orderRequest;