import React from 'react'

const PostForm = () => {
    return (
        <div className='bg-choco p-2 rounded-md text-white space-y-3 p-8'>
            <span>New Post</span>
            <form className='space-y-4'>
                <input type="text" placeholder="Title" className='bg-dark pl-4 pr-5 pt-1 pb-1 w-full' />
                <input type="textarea" placeholder="Body" className='bg-dark pl-4 pr-5 pt-1 pb-1 w-full' />
                <button className='bg-milk pl-2 pr-2 rounded-md text-dark'>Submit</button>
            </form>
        </div>
    )
}

export default PostForm