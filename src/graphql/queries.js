export const listTodos = `
  query listTodos {
    listTodos(limit: 9999) {
        items {
            id
            name
            description
            image
        }
    }
  }
`;
