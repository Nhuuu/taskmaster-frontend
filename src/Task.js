import React from 'react';
import History from './History.js';
import Form from './Form.js'

import './App.css';

function Task(props) {
  return(
    <ul>
      {props.tasks.map((t, id) => {
        return(
          <li key={t.id}>
            <details>
              <summary>
                <span>Task: {t.title} </span>
                <Form task={t} api={props.api}/>
              </summary>
              <p>Description: {t.description}</p>
              <p>Assigned to: {t.assignee}</p>
              <History history={t.history} />
            </details>
          </li>
        )
      })}
    </ul>
  )
}

export default Task;