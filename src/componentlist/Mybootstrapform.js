import React from 'react';
import { useForm } from 'react-hook-form';

function Mybootstrapform() {


    const { register, handleSubmit,watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-light shadow m-5 p-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register("fullname",{ required: true })}/>
                {errors.fullname && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Email id</label>
                <input type="email" className="form-control" {...register("email",{ required: true })}/>
                {errors.email && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Phone No</label>
                <input type="text" className="form-control" {...register("phone",{ required: true })} pattern='[0-9]{10}'/>
                {errors.phone && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Address</label>
                <input type="text" className="form-control" {...register("address",{ required: true })}/>
                {errors.address && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6 mt-3'>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" {...register("pass",{ required: true })}/>
                {errors.pass && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-12 text-center mt-3'>
               <button className='btn btn-success'>submit</button>
            </div>
        </div>
    </div>
    </form>
  )
}

export default Mybootstrapform