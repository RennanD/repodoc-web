import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '../hooks/auth';

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
