import Content from "./Content"
import Header from "./Header"
import Total from "./Total" 



const App = () => {

  

  return (
    <>
      <Header course="Half Stack application development" />
      <Content />
      <Total exercises1={10} exercises2={7} exercises3={14} />
    </>
  )
}

export default App