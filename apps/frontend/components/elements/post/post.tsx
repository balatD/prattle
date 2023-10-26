'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import type { Post } from '../../../types/elements/post-response';

interface PostProps {
    id: number,
    post: Post
}

const Post = (props: PostProps) => {
    const { data: session } = useSession();
    const [likeState, setLike] = useState({
        likes: props.post.likes,
        isLiked: false,
    } as { likes: number, isLiked: boolean });

    const toggleLike = async () => { }

    console.log(session);

    const post = (
        <div className={`bg-choco p-10 rounded-md border border-milk`}>
            <h2 className='text-lg'>{props.post.title}</h2>
            <p>{props.post.body}</p>

            <div className='flex flex-row space-x-2'>
                <button onClick={() => toggleLike()} className="flex flex-row space-x-1">
                    <svg height='20' width='20' viewBox='0 0 20 20' fill='#fff'>
                        <path d='M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61'></path>
                    </svg>
                    <span>{likeState.likes}</span>
                </button>

                <a href='#'>
                    <svg height='20' width='20' viewBox='0 0 20 20' fill='#fff'>
                        <path d='M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z'></path>
                    </svg>
                </a>
            </div>
        </div>
    );

    // Check if post is public, if not check if user session is valid to show private posts
    if (props.post.public) {
        return post;
    } else if (session) {
        return post;
    }
}

export default Post