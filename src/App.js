import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [number, setNumber] = useState(0)
  return (
    <> 
    <div>Number state: {number}</div>
    <button onClick={() =>{
      // setNumber(number+1) //반복하면 한번만, 배치성으로 처리. 배치 업데이트
      // 리엑트는 다 모은 다음 한번만 실행한다. 중복하면 안한다.
      // 랜더링이 잦다 => 성능에 이슈가 있는 것!
      setNumber((currentNumber) =>{
        return currentNumber+1; //함수도 가능. 중복하면 중복실행.
        //현재를 받고 실행하기 때문에. 현재가 달라짐.
      })
      }}></button>
    </>
  );
}

export default App;
