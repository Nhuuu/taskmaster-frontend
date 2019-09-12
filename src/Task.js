import React from 'react';
import History from './History.js';

import './App.css';

function Task(props) {
  return(
    <ul>
      {props.tasks.map((t, id) => {
        return(
          <li key={t.id}>
            <details>
              <summary>
                <span>{t.title}</span>
              </summary>
              <History history={t.history} />
            </details>
          </li>
        )
      })}
    </ul>
  )
}

export default Task;