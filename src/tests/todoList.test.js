import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import TodoList from "../components/TodoList";

describe("Teste do todo list", ()=>{
    test("1.1 redenrizar o titulo", ()=>{
        render(<TodoList/>)
        const titulo = screen.getByText("Todo List")
        expert(titulo).toBeInTheDocument()

    })
    test("1.2 input deve iniciar vazio", ()=>{
        render(<TodoList/>)
        const input = screen.getAllByPlaceholderText(/enter a todo/i)
        expert(input).toHaveValue("")
    })
    test("1.3 deve atualizar o valor do input ao digitar nele", async ()=>{
        const user = userEvent.setup()
        render(<TodoList/>)
        const input = screen.getAllByPlaceholderText(/enter a todo/i)
        await user.type(input, "Estudar{enter}")
        const tecladoTodo = screen.getByText(/estudar/i)
        expect(tecladoTodo).toBeInTheDocument("Estudar")
        expect(input).toHaveValue("Estudar")
    })
})