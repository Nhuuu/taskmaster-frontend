import React from 'react';

function Form(props) {
  return (
    <div>
      <form method="post" action={`${props.api}/${props.task.id}/images`} encType="multipart/form-data">
        <label for="file">Upload an image </label>
        <input id="file" type="file" name="file" />
        <button>Save</button>
      </form>
    </div>
  )
}

export default Form;