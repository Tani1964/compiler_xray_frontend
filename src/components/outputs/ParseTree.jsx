import Tree from "./Tree";
import axios from "axios";
import { json } from "d3";
import { useState, useEffect } from "react";


const ParseTree = () => {
  

  return (
    <div className="h-[60%] border-2 rounded-xl shadow-inner py-1 px-1">
      <h1>Syntax Analyzer output (Parse tree): </h1>
      <div className="overflow-y-scroll h-[90%] relative flex justify-center">
        <Tree/>
      </div>
    </div>
  );
};

export default ParseTree;