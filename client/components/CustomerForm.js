import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerForm = () => {
  const customerData = [{}];
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      id: id,
      amount: +amount,
      date: new Date(date),
    };

    customerData.push(data);

    axios.post("/data/api", customerData).then((res) => {
      console.log(customerData);
      console.log("the response status is: ", res.status);
      console.log("the customer data is: ", res.data);
    });

    setName("");
    setId("");
    setDate("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Customer Name</label>
            <input type="text" value={name} onChange={nameChangeHandler} />
          </div>
          <div>
            <label>Customer Id</label>
            <input type="text" value={id} onChange={idChangeHandler} />
          </div>
          <div>
            <label>Amount</label>
            <input type="text" value={amount} onChange={amountChangeHandler} />
          </div>
          <div>
            <label>Date</label>
            <input type="date" value={date} onChange={dateChangeHandler} />
          </div>
          <div>
            <button type="submit">Add Transaction</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
