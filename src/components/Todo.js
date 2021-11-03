import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Todo.css";
function Todo() {
  const [todos, setTodos] = useState(["belajar react ", "belajar state "]);
  const [inputTodo, setInputTodo] = useState("");
  const addTodo = () => {
    setTodos([...todos, inputTodo]);
  };
  const handleChanges = (event) => {
    setInputTodo(event.target.value);
  };
  console.log(inputTodo);

  const editTodo = (item) => {
    const inputPrompt = prompt();
    const gantiTodo = todos.map((todos, index) => {
      if (index == item) {
        return inputPrompt;
      } else {
        return todos;
      }
    });
    setTodos(gantiTodo);
  };
  console.log(editTodo);

  // const deleteTodo = (item) => {
  //     console.log(item)
  //     let newTodos = todos.filter(item => item !== item)

  //     setTodos(newTodos)
  // }
  // console.log(inputTodo)

  return (
    <div className="Todo">
      <div>
        <input
          type="text"
          placeholder="Tambahkan Data"
          onChange={handleChanges}
        />
        <Button variant="primary" onClick={addTodo}>
          Add
        </Button>
      </div>{" "}
      <br />
      <div>
        <ul>
          {todos.map((item, index) => (
            <div>
              <Row xs="auto" sm="7">
                <Col>
                  <li>
                    <h4>{item}</h4>
                  </li>
                </Col>
                {/* <Row xs="auto"> */}
                <Col>
                  <Button
                    variant="danger"
                    onClick={() =>
                      setTodos(
                        todos.filter(
                          (item, filterIndex) => filterIndex !== index
                        )
                      )
                    }
                  >
                    {" "}
                    Delete
                  </Button>
                </Col>
                {/* <button>Edit</button> */}
                <Col className="">
                  <Button variant="success" onClick={() => editTodo(index)}>
                    Edit
                  </Button>
                </Col>
              </Row>
            </div>
            // </ListGroup>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
