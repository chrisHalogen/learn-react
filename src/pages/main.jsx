import React from "react";
import Header from "../components/header";
import ConditionalrenderingFunction from "../components/conditionalrenderingFunction";
import MyForm from "../components/myForm";
import InlineStyle from "../components/inlineStyle";
import ReducerExample from "../components/reducerExample";

const Main = () => {
  let name = "halogenius";
  const element = <h1>Hello, {name}!</h1>;
  return (
    <div>
      <Header title="Styled Inline" />
      <InlineStyle />
      <Header title="Reducer Example" />
      <ReducerExample />
      <Header title="Form" />
      <MyForm />
      <Header title="Conditional Rendering" />
      <ConditionalrenderingFunction isloggedin={true} />
    </div>
  );
};

export default Main;
