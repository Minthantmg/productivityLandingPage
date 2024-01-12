import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
        </div>
    );
};

export const showToast = (message) => {
    toast.success(message);
};
export default Toast;