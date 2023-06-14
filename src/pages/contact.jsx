import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  

  return (
    <div className="flex flex-col items-center bg-[#C2CEDA] text-[#000009]">
      <div className="pt-[90px] w-[90vw] lg:w-[60%]">
      <div className="flex flex-col items-center">
        <div className="w-[80vw] text-center">
          <p className="text-[3rem]">Contact Us</p>
          <p className="text-[2rem]">
            If you are inquiring about our services, availability and pricing,
            Kindly fill in the contact form below
          </p>
        </div>
        <form
          className="w-[90%] p-[1rem] border border-[#000009] my-[1rem] flex flex-col"
          action="https://formsubmit.co/ogunzshotit@gmail.com" method="POST"
        >
          <label className="text-left mt-[0.5rem] text-[1.5rem]">Name</label>
          <input
            type="text"
            name="Name"
            className=" border py-[0.5rem] text-black rounded-[10px] text-[1.5rem] px-[1rem]"
          />
          <label className="text-left mt-[0.5rem] text-[1.5rem]">Email</label>
          <input
            type="text"
            name="Email"
            className=" border py-[0.5rem] text-black rounded-[10px] px-[1rem] text-[1.5rem]"
          />

          <label className="text-left mt-[0.5rem] text-[1.5rem]">
            Phone Number
          </label>
          <input
            className="py-[0.5rem] text-black rounded-[10px] px-[1rem] border text-[1.5rem]"
            type="tel"
            name="Phone"
          />

<label className="text-left mt-[0.5rem] text-[1.5rem]">
          Booking Date
          </label>
<input type="date" name="Booking Date" className="py-[0.5rem] text-[1.5rem] text-black rounded-[10px] px-[1rem] border"/>
            
         
          <label className="text-left mt-[0.5rem] text-[1.5rem]">
        Describe yout shoot
          </label>
          <textarea name="Describe Your Shoot" className="p-[1rem] text-[1.5rem] text-black border rounded-[10px]" />
          {/* <Link to="/"> */}
            <input 

              type="submit"
              value="Submit"
              className="font-bold border border-[#000009] mt-[2rem] text-[2rem] py-[0.5rem] px-[1rem]"
            />
          {/* </Link> */}
        </form>
      </div>
    </div>

    </div>  );
}
