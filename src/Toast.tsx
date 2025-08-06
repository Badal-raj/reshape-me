import { ToastContainer } from 'react-toastify';

export const Toast = () => (
  <ToastContainer
    className="errorState"
    autoClose={3000}
    hideProgressBar={false}
    position={'top-right'}
    theme="light"
  />
);