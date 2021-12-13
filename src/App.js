import React from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };

  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id });
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>+</button>
        <button onClick={() => getCash(Number(prompt()))}>-</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div>
              {customer.name}
              <span onClick={() => removeCustomer(customer)}>delete</span>
            </div>
          ))}
        </div>
      ) : (
        <div>НЕТУ!</div>
      )}
    </div>
  );
}

export default App;
