export const createTodo = `
  mutation CreateTodo( $input: CreateTodoInput! ) {
    createTodo( input: $input ) {
      id
      name
      description
    }
  }
`;

export const deleteTodo = `
  mutation deleteTodo( $input: DeleteTodoInput! ) {
    deleteTodo( input: $input ) {
      id
    }
  }
`;
