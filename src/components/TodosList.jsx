import React from 'react';
import { Header, List, Segment, Button, Icon, Image } from 'semantic-ui-react';

import * as mutations from './../graphql/mutations';

import { API, graphqlOperation } from 'aws-amplify';

const baseImageURL = 'https://todoappawsbucket-aws.s3.amazonaws.com/';

export const TodosList = props => {
  const handleDelete = async id => {
    let input = {
      id: id,
    };
    await API.graphql(graphqlOperation(mutations.deleteTodo, { input }));
  };

  const todoItems = () => {
    return props.todos.sort(makeComparator('name')).map(todo => (
      <List.Item key={todo.id}>
        <List.Content floated='right'>
          <Button onClick={() => handleDelete(todo.id)}>
            <Icon name='window close' size='large' />
          </Button>
        </List.Content>
        <List.Icon name='tasks' size='large' verticalAlign='middle' />
        <List.Item>
          <List.Content>
            <List.Header>{todo.name}</List.Header>
            <List.Description>{todo.description}</List.Description>
          </List.Content>
          {todo.image ? <Image src={baseImageURL + todo.image} size='small' /> : null}
        </List.Item>
      </List.Item>
    ));
  };

  return (
    <Segment raised>
      <Header as='h3'>My Todos</Header>
      <List divided relaxed>
        {todoItems()}
      </List>
    </Segment>
  );
};

function makeComparator(key, order = 'asc') {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const aVal = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const bVal = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (aVal > bVal) comparison = 1;
    if (aVal < bVal) comparison = -1;

    return order === 'desc' ? comparison * -1 : comparison;
  };
}
