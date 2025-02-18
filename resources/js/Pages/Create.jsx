import React from 'react'
import { Head, useForm } from '@inertiajs/react'

function Create() {
  const { data, setData, post, processing, errors } = useForm({
    body: '',
  });

  function submit(e) {
    e.preventDefault();
    post('/posts');
  }
  console.log(useForm());

  return (
    <>
      <Head title="Create Post" />
      <h1 className="title">Create a new Post</h1>
      {/* {data.body} */}
      <form className="w-1/2 mx-auto" onSubmit={submit}>
        <textarea 
          placeholder="Body" 
          rows="5" 
          value={data.body}
          onChange={(e) => setData('body', e.target.value)}
          className={`'border w-full p-2 mt-2' ${
            errors.body ? '!ring-red-700' : ''
          }`}
        />
        {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
        <button type="submit" className='primary-btn mt-4 w-1/2 mx-auto' disabled={processing}>Create a Post</button>
      </form>
    </>
  )
}

export default Create
