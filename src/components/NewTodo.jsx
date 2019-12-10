import React, { useState } from 'react';
import { Header, Segment, Input } from 'semantic-ui-react';

import * as mutations from './../graphql/mutations';

import { API, graphqlOperation } from 'aws-amplify';

export const NewTodo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  // const [todoId, setTodoId] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    let input = {
      name: todoName,
      description: todoDescription,
    };
    await API.graphql(graphqlOperation(mutations.createTodo, { input }));

    setTodoName('');
    setTodoDescription('');
  };

  return (
    <Segment raised>
      <Header as='h3'>Add a new todo</Header>
      <Input
        fluid
        size='large'
        type='text'
        icon='plus'
        iconPosition='left'
        placeholder='Todo Name'
        value={todoName}
        name='todoName'
        onChange={event => setTodoName(event.target.value)}
      />
      <br />
      <Input
        fluid
        size='large'
        placeholder='Todo Description'
        value={todoDescription}
        onChange={event => setTodoDescription(event.target.value)}
        name='todoDescription'
        icon='plus'
        iconPosition='left'
        action={{ content: 'Create', onClick: handleSubmit }}
      />
    </Segment>
  );
};
