import { useState, useEffect } from "react";
import { AyButton } from 'amiya';

const Home = () => {
   const [count, setCount] = useState(0);
   return <>
      <div>{count}</div>
      <button href='http://www.baidu.com'>原生</button>
      <AyButton href='http://www.baidu.com' ghost onClick={()=>setCount(count + 1)} confirm={true} confirmMsg={'弹窗'} onConfirm={()=>console.log(1)}>按钮</AyButton>
   </>
}

export default Home;