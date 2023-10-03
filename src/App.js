import './App.css';
import { Button, Container } from "react-bootstrap"
import { useState } from 'react';
import quiz from "./quiz.json"

function Ques(props) {
  return(<h3>{props.text}</h3>)
}

function Ans(props) {
  return (<Button ans={props.name} className='ms-4' onClick={props.click}>{props.text}</Button>)
}

function App() {
  var [i, setI] = useState(0)
  const check = (i, ans, setI) => {
    if(quiz[i].right === ans) alert("Đúng rồi!!!")
    else alert(`Sai rồi. Đáp án là ${quiz[i][quiz[i].right]}`)
    setI(i + 1)
  }
  if(i !== (quiz.length - 1)) {
    return (
      <Container className='mt-5 pt-5'>
        <Ques text={quiz[i].ques}/>
        <div className='d-flex justify-content-center mt-5'>
          <Ans name={"a"} text={quiz[i].a} click={() => check(i, "a", setI)}/>
          <Ans name={"b"} text={quiz[i].b} click={() => check(i, "b", setI)}/>
          <Ans name={"c"} text={quiz[i].c} click={() => check(i, "c", setI)}/>
          <Ans name={"d"} text={quiz[i].d} click={() => check(i, "d", setI)}/>
        </div>
     
      </Container>
    )
  } else return (<h1 className='d-flex justify-content-center'>Hết câu hỏi</h1>)
}

export default App;
