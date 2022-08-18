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

const orderRequest = {
    saveOrder,
}

export default orderRequest;