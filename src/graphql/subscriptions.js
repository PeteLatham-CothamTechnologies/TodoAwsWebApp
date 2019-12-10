export const onCreateTodo = `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
    }
  }
`;

export const onDeleteTodo = `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
    }
  }
`;

export const onCreateOrDeleteTodo = `
  subscription OnCreateOrDeleteTodo {
    onCreateTodo {
      id
      name
      description
    }
    onDeleteTodo {
      id
    }
  }
`;
