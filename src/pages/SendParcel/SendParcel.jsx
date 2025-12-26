import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';


const SendParcel = () => {

  const {register, 
    handleSubmit, 
    watch, 
    // formState: {error}
  }= useForm()

  const {user}=useAuth()
const axiosSecure= useAxiosSecure()

  const serviceCenters= useLoaderData()
  const regionsDuplicate = serviceCenters.map(c=> c.region)
  const regions= [...new Set(regionsDuplicate)]
  
  const senderRegion= watch('senderRegion')
  const reciverRegion= watch ('reciverRegion')

  const districtsByRegion= (region)=>{
    const regionDistricts= serviceCenters.filter(c=>c.region=== region);
    const districts= regionDistricts.map(d=>d.district)
    return districts
  }

    const handleSendParcel=data=>{
        console.log(data)
        const isDoc= data.parcelType==='document'
        const isSameDistrict = data.senderDistrict===data.reciverDistrict;
      const parcelWeight= parseFloat(data.parcelWeight)
        let cost =0;
        if(isDoc){
          cost = isSameDistrict? 60: 80;
        }
        else{
          if(parcelWeight<3){
            cost = isSameDistrict? 110 : 150
          }
          else{
            const minCharge= isSameDistrict? 110: 150;

            const extraWeight= parcelWeight-3;

            const extraCharge= isSameDistrict? extraWeight * 40 : extraWeight *40+40;

            cost = minCharge+ extraCharge;

          }
        }
        console.log(cost)

        Swal.fire({
  title: "Agree with the cost?",
  text: `You will be charged ${cost} taka!`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Agree!"
}).then((result) => {
  if (result.isConfirmed) {

    // save the parcel into the databse

    axiosSecure.post('/parcels', data).then(res =>{
      console.log(res.data)
    })
    
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});
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

                     {/* Sender Name */}
          <label className="label text-blue-950">Sender Name</label>
          <input type="text" {...register('senderName')} 
          defaultValue={user?.displayName}
          className="input w-full" placeholder="Sender Name" />

                     {/* Sender Email */}
          <label className="label text-blue-950">Sender Email</label>
          <input type="email" {...register('senderEmail')} 
          defaultValue={user?.email}
          className="input w-full" placeholder="Sender Email" />
         

         {/* Sender region */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Region</legend>
  <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a region</option>
   
   {
    regions.map((r, i)=> <option key={i} value={r}>{r}</option>)
   }

   
  </select>
  
</fieldset>


         {/* Sender district */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Sender District</legend>
  <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
    <option disabled={true}>Pick a district</option>
   
   {
    districtsByRegion(senderRegion).map((r, i)=> <option key={i} value={r}>{r}</option>)
   }


  </select>
  
</fieldset>

       

        {/* Sender address */}
                 
          <label className="label mt-4 text-blue-950">Sender Address</label>
          <input type="" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
         
       


        {/* Sender number */}
                 
          <label className="label mt-4 text-blue-950">Sender Phone Number</label>
          <input type="number" {...register('senderPhoneNumber')} className="input w-full" placeholder="Sender Phone Number" />
         
        

        
        
            

        {/* pickup instructions */}
                
          <label className="label text-blue-950 mt-4">Pickup Instructions</label>
          <input type="text" {...register('pickupInstructions')} className="input w-full h-20" placeholder="Pickup Instructions" />
         
        </fieldset>

                {/* reciver info */}
                 
                
                 <fieldset className="fieldset">
                    <h4 className='text-2xl font-semibold'>Reciver Details</h4>

                    {/* Reciver Name */}
          <label className="label text-blue-950">Reciver Name</label>
          <input type="text" {...register('reciverName')} className="input w-full" placeholder="Reciver Name" />
         
        
         {/* Reciver Email */}
          <label className="label text-blue-950">Reciver Email</label>
          <input type="email" {...register('reciverEmail')} className="input w-full" placeholder="Reciver Email" />


           {/* Reciver region */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Reciver Region</legend>
  <select {...register('reciverRegion')} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a region</option>
   
   {
    regions.map((r, i)=> <option key={i} value={r}>{r}</option>)
   }

   
  </select>
  
</fieldset>


         {/* reciver district */}
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Reciver District</legend>
  <select {...register('reciverDistrict')} defaultValue="Pick a district" className="select">
    <option disabled={true}>Pick a district</option>
   
   {
    districtsByRegion(reciverRegion).map((r, i)=> <option key={i} value={r}>{r}</option>)
   }


  </select>
  
</fieldset>


        {/* Reciver address */}
                 
          <label className="label mt-4 text-blue-950">Reciver Address</label>
          <input type="" {...register('reciverAddress')} className="input w-full" placeholder="Reciver Address" />
         
       


        {/* Reciver number */}
                 
          <label className="label mt-4 text-blue-950">Reciver Phone Number</label>
          <input type="number" {...register('reciverPhoneNumber')} className="input w-full" placeholder="Reciver Phone Number" />
         
      

        
       
             

      
                 
         
         
        </fieldset>
            </div>


            <input type="submit" value="Send Parcel"  className='btn btn-primary text-black mt-7'/>
            </form>
        </div>
    );
};

export default SendParcel;