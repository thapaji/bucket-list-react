import { useState } from "react";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="container pt-5">
      <h1 className="mt-4 mb-4">Bucket List Manager</h1>
      <Form />
      <Table/>
    </div>
  );
}

export default App;
