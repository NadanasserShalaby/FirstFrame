import React from 'react'

export default function Contant() {
  return (
    <>
      <section className='st-lye-contant'>
        <div className='astric as-color position-relative '>
          <h1 className='text-uppercase text-center position-relative fw-bolder color'>conatct section</h1>
        </div>

        <div className='container w-75 pt-5'>
          <div className="form-floating mb-3 ">
            <input type="text" className="form-control  border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="NoNo" />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating mb-3 ">
            <input type="number" className="form-control  border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="22" />
            <label htmlFor="floatingInput">User Age </label>
          </div>
          <div className="form-floating mb-3 ">
            <input type="email" className="form-control  border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">User Email</label>
          </div>
          <div className="form-floating mb-3 ">
            <input type="password" className="form-control  border-top-0 border-start-0 border-end-0" id="floatingInput" placeholder="1234567890" />
            <label htmlFor="floatingInput">User Password</label>
          </div>
          <button className='btn main'>Send Massege</button>
        </div>

      </section>
    </>
  )
}
