import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Box, Container, Typography } from "@mui/material";
import Input from "./components/Input";
import Button from "./components/Button";
import InteractiveList from "./components/InteractiveList";

function App() {
  const [inpValue, setInpValue] = useState("");
  const [todoData, setTodoData] = useState([]);

  // console.log(inpValue);

  const addTodoHandler = () => {
    inpValue
      ? setTodoData((prev) => [...prev, inpValue])
      : alert("You cant save empty todo");
    setInpValue("");
  };

  const deleteTodoHandler = (i) => {
    // console.log("Delete Todo Index >>> ", i);

    const filteredTodoData = todoData.filter((el, index) => index !== i);
    setTodoData(filteredTodoData);
  };

  const deleteAllTodoHandler = () => {
    setTodoData([]);
  };

  const editTodoHandler = (i) => {
    // console.log("Edit todo index >>> ", i);
    const todos = [...todoData];
    const editValue = prompt("Edit todo value", todoData[i]);
    // console.log(editValue);
    todos[i] = editValue;

    editValue ? setTodoData(todos) : alert("You cant save empty todo");
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Input
            onChange={(e) => setInpValue(e.target.value)}
            value={inpValue}
          />
        </Box>

        <Box>
          <Button
            disabled={!inpValue.trim() && true}
            label="Add"
            onClick={addTodoHandler}
          />
          {todoData.length > 1 && (
            <Button
              sx={{ ml: 2 }}
              label="Delete All"
              color="error"
              variant="outlined"
              onClick={deleteAllTodoHandler}
            />
          )}
        </Box>

        {todoData.length > 0 && (
          <Typography sx={{ mt: 2, mb: 2, textAlign: "center" }} variant="h4">
            Your Todos
          </Typography>
        )}

        {todoData.length ? (
          todoData.map((el, i) => (
            <InteractiveList
              text={el}
              onClickDelete={() => deleteTodoHandler(i)}
              onClickEdit={() => editTodoHandler(i)}
            />
            // <li key={i}>
            //   {el}
            //   <span>
            //     <button
            //       className="btn btn-warning"
            //       onClick={() => editTodoHandler(i)}
            //     >
            //       Edit
            //     </button>
            //     <button
            //       className="btn btn-danger"
            //       onClick={() => deleteTodoHandler(i)}
            //     >
            //       Delete
            //     </button>
            //   </span>
            // </li>
          ))
        ) : (
          <Typography
            sx={{ mt: 2, mb: 2, textAlign: "center" }}
            color="error"
            variant="h4"
          >
            No data found...
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default App;
