'use client';

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';

const Navigation = () => {
    const { data: session } = useSession();

    console.log(session);

    return (
        <>
            <header className='m-8'>
                <div className='flex flex-wrap items-center justify-between'>
                    <div className=''>
                        <a href='#'>Prattle</a>
                    </div>

                    <nav>
                        <ul className='flex flex-row space-x-5'>
                            <li className='hover:text-milk'>
                                <a href='#'>Home</a>
                            </li>

                            {!session && (
                                <li className='hover:text-milk'>
                                    <button onClick={() => signIn()}>Sign In</button>
                                </li>
                            )}

                            {session && (
                                <li className='hover:text-milk'>
                                    <a href='#'>Profile</a>
                                </li>
                            )}

                            {session && (
                                <li className='hover:text-milk'>
                                    <button onClick={() => signOut()}>Sign Out</button>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
                {session && (
                    <div className='flex flex-row-reverse'>
                        <div className='mt-3'>
                            <span>Logged in as <strong>{session?.user?.email}</strong></span>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navigation