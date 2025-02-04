import React from 'react'
import { useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy';
function Show({post}) {
    const { delete: destory } = useForm();
    const route = useRoute();
    function submit(e) {
        e.preventDefault();
        // destory(`/posts/${post.id}`);
        destory(route("posts.destroy", post));
    }
return (
    <>
        <div className="mt-10 p-4 border-b">
                <div className="text-sm text-gray-500">
                        <span>Posted on: </span>
                        <span className="text-green-950">{new Date(post.created_at).toLocaleTimeString() }</span>
                </div>
                <p className="font-medium">{post.body}</p>
                <div className="flex items-center justify-end gap-2">
                    <form action="" onSubmit={submit}>
                        <button type='submit' className='bg-red-500 rounded-md text-sm px-4 py-2 text-white'>Delete</button>
                        <button className='bg-green-500 rounded-md text-sm px-4 py-2 text-black ml-2' onClick={() => window.location.href = '/'}>Back</button>
                    </form>
                </div>
        </div>
    </>
)
}

export default Show
