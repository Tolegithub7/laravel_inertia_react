import React from 'react'

function Show({post}) {
return (
    <>
        <div className="mt-10 p-4 border-b">
                <div className="text-sm text-gray-500">
                        <span>Posted on: </span>
                        <span className="text-green-950">{new Date(post.created_at).toLocaleTimeString() }</span>
                </div>
                <p className="font-medium">{post.body}</p>
                <button className='text-blue-500' onClick={() => window.location.href = '/'}>Back</button>
        </div>
    </>
)
}

export default Show
