import React from 'react';
import { useForm } from 'react-hook-form';


const SendParcel = () => {

  const {register, handleSubmit, formState: {error}}= useForm()

    const handleSendParcel=data=>{
        console.log(data)
    }


    return (
        <div>
            <h2 className='text-5xl font-bold'>Send A Parcel</h2>

            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4'>
            {/* parcel type */},
            <div>
                
                 <label className="label mr-7">
                <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />    
                    Documents</label>

                     <label className="label">
                <input type="radio" {...register('parcelType')} value="non-document" className="radio" />    
                    Non-Documents</label>
            </div>

            {/* parcel info */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                <fieldset className="fieldset">
          <label className="label">Parcel Name</label>
          <input type="text" {...register('parcelName')} className="input w-full" placeholder="parcel name" />
         
        </fieldset>

                <fieldset className="fieldset">
          <label className="label">Parcel Weight (kg)</label>
          <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="parcel Weight" />
         
        </fieldset>
                 </div>

            {/* two column */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>


                {/* sender info */}
               
                 <fieldset className="fieldset">
                     <h4 className='text-2xl font-semibold'>Sender Details</h4>
          <label className="label text-blue-950">Sender Name</label>
          <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />
         
        

        {/* Sender address */}
                 
          <label className="label mt-4 text-blue-950">Sender Address</label>
          <input type="" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
         
       


        {/* Sender number */}
                 
          <label className="label mt-4 text-blue-950">Sender Phone Number</label>
          <input type="number" {...register('senderPhoneNumber')} className="input w-full" placeholder="Sender Phone Number" />
         
        

        
        {/* Sender district */}
                
          <label className="label mt-4 text-blue-950">Sender District</label>
          <input type="" {...register('senderDistrict')} className="input w-full" placeholder="Sender District" />
            

        {/* pickup instructions */}
                
          <label className="label text-blue-950 mt-4">Pickup Instructions</label>
          <input type="text" {...register('pickupInstructions')} className="input w-full h-20" placeholder="Pickup Instructions" />
         
        </fieldset>

                {/* reciver info */}
                 
                
                 <fieldset className="fieldset">
                    <h4 className='text-2xl font-semibold'>Reciver Details</h4>
          <label className="label text-blue-950">Reciver Name</label>
          <input type="text" {...register('reciverName')} className="input w-full" placeholder="Reciver Name" />
         
        

        {/* Reciver address */}
                 
          <label className="label mt-4 text-blue-950">Reciver Address</label>
          <input type="" {...register('reciverAddress')} className="input w-full" placeholder="Reciver Address" />
         
       


        {/* Reciver number */}
                 
          <label className="label mt-4 text-blue-950">Reciver Phone Number</label>
          <input type="number" {...register('reciverPhoneNumber')} className="input w-full" placeholder="Reciver Phone Number" />
         
      

        
        {/* Reciver district */}
                
          <label className="label mt-4 text-blue-950">Reciver District</label>
          <input type="" {...register('reciverDistrict')} className="input w-full" placeholder="Reciver District" />
             

        {/* pickup instructions */}
                 
          <label className="label text-blue-950 mt-4">Pickup Instructions</label>
          <input type="text" {...register('pickupInstructions')} className="input w-full h-20" placeholder="Pickup Instructions" />
         
        </fieldset>
            </div>


            <input type="submit" value="Send Parcel"  className='btn btn-primary text-black mt-7'/>
            </form>
        </div>
    );
};

export default SendParcel;