import {useContext } from "react"; // Import React hooks
import { DataContext } from "../contexts/DataContext";

const Lexemes = () => {
  // Create a state variable to store the lexeme data. Initialize with `null`.
  const {data, setData} = useContext(DataContext)
  // console.log(data.interpreter)
  if (data){
    setData(data)
    console.log(data)
  }

  return (
    <div className="h-[20%] border-2 rounded-xl shadow-inner py-1 px-1">
      {/* Display the lexemes fetched from the server */}
      Lexical Analyzer input (lexemes): {data?data.lexemes: ""} 
      {/* If `data` is null, it will display "null" */}
    </div>
  );
};

export default Lexemes; // Export the component for use in other parts of the application
