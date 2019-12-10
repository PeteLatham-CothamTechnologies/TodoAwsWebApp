import React from 'react';
import { Segment } from 'semantic-ui-react';

import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

import { TodosList } from './TodosList';

import * as queries from './../graphql/queries';
import * as subscriptions from './../graphql/subscriptions';

export const TodosListLoader = () => {
  const onNewTodo = (prevQuery, newData) => {
    let updatedQuery = Object.assign({}, prevQuery);
    updatedQuery.listTodos.items = prevQuery.listTodos.items.concat(newData);
    return updatedQuery;
  };

  const onRemoveTodo = (prevQuery, newData) => {
    let updatedQuery = Object.assign({}, prevQuery);
    updatedQuery.listTodos.items = prevQuery.listTodos.items.filter(item => item.id !== newData.id);
    return updatedQuery;
  };

  return (
    <Segment>
      <Connect
        query={graphqlOperation(queries.listTodos)}
        subscription={graphqlOperation(subscriptions.onCreateOrDeleteTodo)}
        onSubscriptionMsg={(prev, { onCreateTodo, onDeleteTodo }) => {
          if (onCreateTodo) {
            return onNewTodo(prev, onCreateTodo);
          } else if (onDeleteTodo) {
            return onRemoveTodo(prev, onDeleteTodo);
          }
        }}
      >
        {({ data, loading, errors }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          if (errors.length > 0) {
            return <div>{JSON.stringify(errors)}</div>;
          }
          if (!data.listTodos) return;

          return <TodosList todos={data.listTodos.items} />;
        }}
      </Connect>
    </Segment>
  );
};
