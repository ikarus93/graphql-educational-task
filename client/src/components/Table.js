import React, {useState, useContext} from 'react';

function Table({todos}) {
  return (<table>
      <tr><th>
          User
          </th>
          <th>
              Task
          </th>
          <th>
              Due
          </th>
          </tr>
  </table>)
}

export default Table;
