import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Link,Outlet} from 'react-router-dom';
// import ProductList from './components/ProductList.jsx';
// import TabUi from './components/TabUi.jsx';
import './App.css'
// import { useState } from 'react';
// import { Router } from 'react-router-dom';

function App(){
  // const [prodFlg, setProdFlg] = useState(true);
  // const [tabFlg, setTabFlg] = useState(false);
  // const viewProductList = () => {
  //   setProdFlg(true);
  //   setTabFlg(false);

  // }
  // const ViewTabUi = () =>{
  //   setProdFlg(false);
  //   setTabFlg(true);
  // }
  return(
    <>
    <Header></Header>
    <main>
     
      {/* <div>
        <span onClick={viewProductList}>상품리스트</span>
        <span onClick={ViewTabUi}>테스트</span>
      </div>
      {tabFlg && <TabUi></TabUi>}
      {prodFlg && <ProductList></ProductList>} */}
          <div>
            <Link to={'/'}>상품테스트</Link>
            <Link to={'/test'}>테스트</Link>
          </div>
          <Outlet></Outlet>
    </main>
    <Footer></Footer>
    
    
    </>
  );
}

export default App;