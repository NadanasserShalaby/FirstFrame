import React from 'react'
import avataaars from '../../assets/avataaars.svg'
export default function Home() {
    return (
        <>
            <div className='st-lye text-white'>
                <div className='text-center py-3'>
                    <img src= {avataaars} width={300} height={300} className='rounded-circle ' alt="" />
                </div>
                <div className='astric position-relative '>
                    
                    <h1 className='text-uppercase text-center position-relative fw-bolder'>start Framework</h1>
                </div>
                <div className='text-center pt-5'>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
                
            </div>
        </>
    )
}
