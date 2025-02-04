import React from 'react'
import { Head, useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy';

function Create({ post }) {
  const { data, setData, put, processing, errors } = useForm({
    body: post.body,
  });
  const route = useRoute();

  function submit(e) {
    e.preventDefault();
    // put(`/posts/${post.id}`);
    put(route('posts.update', post));
  }

  return (
    <>
      <Head title="Edot Post" />
      <h1 className="title">Update Your Post</h1>
      <form className="w-1/2 mx-auto" onSubmit={submit}>
        <textarea placeholder="Body" rows="5" value={data.body}
          onChange={(e) => setData('body', e.target.value)}
          className={`'border w-full p-2 mt-2' ${errors.body ? '!ring-red-700' : ''}`}
        />
        {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
        <button type="submit" className='primary-btn mt-4 w-1/2 mx-auto' disabled={processing}>Edit a Post</button>
      </form>
    </>
  )
}

export default Create
