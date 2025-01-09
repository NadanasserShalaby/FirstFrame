import React from 'react'
export default function Footer() {
    return (
        <>
            <div className=" main-color text-white">
                <div className="container ">
                    <div className="row  py-3">
                        <div className="col-md-4 gy-5">
                            <div className="location text-center">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4 gy-5">
                            <div className="web text-center">
                                <h3>AROUND THE WEB</h3>
                                <ul className='list-unstyled d-flex justify-content-center '>
                                    <li className='border-1 border-white rounded-circle border m-2'>
                                        <i className='fa-brands fa-facebook  p-2  '></i>
                                    </li>
                                    
                                    <li className='border-1 border-white rounded-circle border m-2'>
                                        <i className='fa-brands fa-twitter  p-2  '></i>
                                    </li>
                                    
                                    <li className='border-1 border-white rounded-circle border m-2'>
                                        <i className='fa-brands fa-linkedin  p-2  '></i>
                                    </li>
                                    
                                    <li className='border-1 border-white rounded-circle border m-2'>
                                        <i className='fa-brands fa-internet-explorer  p-2  '></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 gy-5">
                            <div className="about text-center">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" bg-footer text-center py-3 " >
                    <p>Copyright © Your Website 2025</p>
                </div>
            </div>

        </>
    )
}
