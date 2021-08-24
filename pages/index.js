import Link from "next/link";
import { useState } from "react";

import Name from "../components/Name";

export default function Home() {
  // const state = useState(0);
  // const num1 = state[0]
  // const setNum1 = state[1];
  const [values, setValues] = useState({
    operation: "+",
    num1: 100,
    num2: 200,
    sum: 300,
    name: "sebas",
  });

  // const [operation, setOperation] = useState("");
  // const [num1, setNum1] = useState(1);
  // const [num2, setNum2] = useState(2);
  // const [sum, setSum] = useState(0);

  // const handleOperationChange = (e) => {
  //   //const name = e.target.name
  //   //const value = e.target.value
  //   const { name, value } = e.target;
  //   setOperation(value);
  // };

  // const handleNum1Change = (e) => {
  //   //const name = e.target.name
  //   //const value = e.target.value
  //   const { name, value } = e.target;
  //   setNum1(value);
  // };

  // const handleNum2Change = (e) => {
  //   //const name = e.target.name
  //   //const value = e.target.value
  //   const { name, value } = e.target;
  //   setNum2(value);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const newValues = {
      ...values,
      [name]: value,
    };
    const nVal = {
      operation: values.operation,
      num1: values.num1,
      num2: values.num2,
      sum: values.sum,
    };
    setValues(newValues);
  };

  // const handleClick = (e) => {
  //   switch (operation) {
  //     case "+":
  //       setSum(num1 + num2);
  //       break;
  //     case "-":
  //       setSum(num1 - num2);
  //       break;
  //   }
  // };

  const handleClick2 = (e) => {
    let suma = 0;
    switch (values.operation) {
      case "+":
        suma = Number(values.num1) + Number(values.num2);
        setValues({ ...values, sum: suma });
        break;
      case "-":
        suma = values.num1 - values.num2;
        setValues({ ...values, sum: suma });
        break;
    }
  };

  return (
    <>
      <div className='container'>
        <Name name={values.name} age='23'>
          <ul>
            <li>
              <Link href='/list'>
                <a target='_blank'>Personajes</a>
              </Link>
            </li>
            <li>mi</li>
            <li>papa</li>
          </ul>
        </Name>
        <h1>
          Hola mi papa esta es la operacion: {values.num1} {values.operation}{" "}
          {values.num2} = {values.sum}
        </h1>
        <input
          type='text'
          name='operation'
          placeholder='ingrese operacion'
          value={values.operation}
          onChange={handleChange}
        />
        <input
          type='text'
          name='name'
          placeholder='ingrese el nombre'
          value={values.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='num1'
          placeholder='num 1'
          value={values.num1}
          onChange={handleChange}
        />
        <input
          type='text'
          name='num2'
          placeholder='num 2'
          value={values.num2}
          onChange={handleChange}
        />
        <button type='submit' onClick={handleClick2}>
          Sumar
        </button>
      </div>
      <style jsx>{`
        div.container {
          align-items: center;
          background-color: #606060;
          color: white;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          min-height: 100vh;
          padding: 0 0.5rem;
        }
      `}</style>
    </>
  );
}
