import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

import { NewTodo } from './components/NewTodo';
import { TodosListLoader } from './components/TodosListLoader';

import Amplify from 'aws-amplify';

import myAppConfig from './aws-config.js';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(myAppConfig);

const App = () => {
  return (
    <Container>
      <Grid padded>
        <Grid.Column>
          <NewTodo />
          <TodosListLoader />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

// export default App;
export default withAuthenticator(App, { includeGreetings: true });
