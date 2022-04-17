import { ToastContainer } from 'react-toastify';
import '../styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
