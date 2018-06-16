import React from "react";
import ReactDOM from "react-dom";

import FAQ, { FAQGroup } from "./FAQ";
import Example from "./Example";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  return (
    <div className="App container">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FAQ collapsed={false} title="Title faq 1" text="lorem ipsum dolor 1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        voluptate recusandae ratione voluptates nemo eum blanditiis esse labore
        vitae. Possimus minus quisquam illo quas distinctio cupiditate vitae.
        In, dolorem adipisci!
      </FAQ>
      <FAQ collapsed={true} title="Title faq 2" text="lorem ipsum dolor">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        voluptate recusandae ratione voluptates nemo eum blanditiis esse labore
        vitae. Possimus minus quisquam illo quas distinctio cupiditate vitae.
        In, dolorem adipisci!
      </FAQ>
      <FAQGroup>
        <FAQ collapsed={false} title="Title faq 1" text="lorem ipsum dolor 1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          voluptate recusandae ratione voluptates nemo eum blanditiis esse
          labore vitae. Possimus minus quisquam illo quas distinctio cupiditate
          vitae. In, dolorem adipisci!
        </FAQ>
        <FAQ collapsed={true} title="Title faq 2" text="lorem ipsum dolor">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          voluptate recusandae ratione voluptates nemo eum blanditiis esse
          labore vitae. Possimus minus quisquam illo quas distinctio cupiditate
          vitae. In, dolorem adipisci!
        </FAQ>
      </FAQGroup>
      <Example />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
