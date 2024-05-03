import Interpreter from "./Interpreter"
import Lexemes from "./Lexemes"
import ParseTree from "./ParseTree"

const Outputs = () => {
  return (
    <div className="h-[80%] flex flex-col gap-[5px]">
        <Lexemes/>
        <ParseTree/>
        <Interpreter/>
    </div>
  )
}

export default Outputs