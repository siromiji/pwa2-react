import React, {useState} from 'react';
import { addCnt,minusCnt,changeCnt } from '../store/slices/detail.js';
import './Detail.css'
import { useDispatch,useSelector} from 'react-redux';

function Detail() {
  const dispatch = useDispatch();
  const cnt = useSelector(state => state.detail.cnt);
  const [inputNum , setInputNum] = useState(0);

  const convertAndSetNumber = (e) =>{
    if(!isNaN(e.target.value)){
      setInputNum(parseInt(e.target.value));
    }else{
      console.error('숫자아님');
    }
  }
   //action 호출 방법 

  return(
     <>
      <h1>상세페이지</h1>
      <p>{cnt}</p>
      <button onClick={() =>{dispatch(addCnt())}}>+</button>
      <button onClick={() =>{dispatch(minusCnt())}}>-</button>
      <input type="number" onChange={convertAndSetNumber}/>
      <button type="button" onClick={()=> dispatch(changeCnt(inputNum))}>입력</button>
    </>
  )
}

export default Detail;