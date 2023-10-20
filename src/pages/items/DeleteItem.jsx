import React, { useEffect } from "react";
import itemRequest from "../../api/Item/item.request";
import Dialog from '../../components/DialogComponent/Dialog'
import { applyToast } from '../../components/toast-message/toast';
import { getCsrfToken } from "../../api/csrf/csrf.request";
import axios from "axios";

const DeleteItem = (props) => {

    useEffect(() => {
        async function handleCsrfToken () {
            const crsfToken = await getCsrfToken();
            axios.defaults.headers.common = {
               "CSRF-Token": crsfToken
            }
        }
        handleCsrfToken()
       }, [])

    const handleDelete = () => {
        itemRequest.deleteItem(props.itemId)
        .then((res) => {
            console.log(res);
            applyToast('Item successfully deleted!', 'success');
            window.location.reload();
        })
    }

    return(
        <div>
            <Dialog
            id={props.id}
            title={props.title}
            content={props.message}
            action={handleDelete}
            buttonName="Delete"
            />
        </div>
    );
}

export default DeleteItem