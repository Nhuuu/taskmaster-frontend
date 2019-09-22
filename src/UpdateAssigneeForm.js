import React from 'react';

function UpdateAssigneeForm(props) {
  return (
    <div>
      <form method="post" action={`${props.api}/${props.task.id}/images`} encType="multipart/form-data">
        <span>Assign Task: </span>

        {/* for each assignee */}
        <select>
          <option value=""></option>
        </select>

        
        <button>Save</button>
      </form>
    </div>
  )
}

export default UpdateAssigneeForm;