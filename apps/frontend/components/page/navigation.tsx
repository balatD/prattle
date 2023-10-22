import React from 'react'

const Navigation = () => {
    return (
        <>
            <header className='m-8'>
                <div className="flex flex-wrap items-center justify-between">
                    <div className=''>
                        <a href="#">Prattle</a>
                    </div>

                    <nav>
                        <ul className='flex flex-row space-x-5'>
                            <li className='hover:text-milk'>
                                <a href='#'>Home</a>
                            </li>
                            <li className='hover:text-milk'>
                                <a href='#'>Profile</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navigation