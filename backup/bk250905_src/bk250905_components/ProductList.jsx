import './ProductList.css';
import ProductDetail from './ProductDetail.jsx';
import { use, useState } from 'react';


function ProductList() {
  const products = [
    {id: 0 , title: '바지',info:'좋은 바지',price: 10000,img:'https://picsum.photos/id/1/5000/3333'},
    {id: 1 , title: '티셔츠',info:'좋은 티셔츠',price: 5000,img:'https://picsum.photos/id/4/5000/3333'},
    {id: 2 , title: '양말',info:'좋은 양말',price: 1000,img:'https://picsum.photos/id/8/5000/3333'}
  ]
  const [showModal,setshowModal] =useState(false);
  const [propsProduct,setpropsProduct] = useState({});
  const viewModal = (product)=>{
    setpropsProduct({...product})
    setshowModal(true);

  }
  return(
    <>
      {showModal && <ProductDetail product={propsProduct} setshowModal={setshowModal}></ProductDetail>}
      
      
      <div className='card-container' >
      
        {products.map((product)=>{
        
          return(
            <div onClick={()=>{viewModal(product)}} className="card" key={product.id} >
              <div className="card-img" style={{backgroundImage:`url('${product.img}')`}} ></div>
              <p className='card-title'>{product.title}</p>
              <p className = 'card-price'>{product.price}</p>
            </div>
          )
        })}
      
    
    
      </div>
    </>
  )

}

export default ProductList;