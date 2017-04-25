//libraries
import React from 'react';
// style file
require ('../../scss/style.scss');
// importing the components
import UserList from '../containers/user_list';
import UserDetail  from '../containers/user_detail';

const App = () => (
      <div>
        <h2>Username List: </h2>
        <UserList />
        <hr/>

        <h2>User Details:</h2>
      </div>

);
export default App;
