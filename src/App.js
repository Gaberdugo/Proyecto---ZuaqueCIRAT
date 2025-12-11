import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Error404 from './containers/errors/Error404';
import Footer from 'components/Footer';
import Home from './containers/pages/Home';
import Login from 'containers/pages/Login';
import Loadinfo from 'containers/pages/Loadinfo';

function App() {
  const styles = {
    page: {
      minHeight: '10vh',
      display: 'flex',
      flexDirection: 'column'
    }
  };

  return (
    <Router>
      <div style={styles.page}>
        <Routes>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />}  /> 

          {/*Home Display*/}
          <Route path="/" element={<Home />}  />

          <Route path="/login" element={<Login />} />

          <Route path='/Loadinfo' element={<Loadinfo/>} />

        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
