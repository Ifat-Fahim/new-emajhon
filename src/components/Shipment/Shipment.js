import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register} />
      {errors.exampleRequired && <span className="error">This field is required</span>}

      <input name="email" defaultValue={loggedInUser.email} ref={register} />
      {errors.exampleRequired && <span className="error">This field is required</span>}

      <input name="address" defaultValue="test" ref={register} />
      {errors.exampleRequired && <span className="error">This field is required</span>}

      <input name="phone" defaultValue="test" ref={register} />
      {errors.exampleRequired && <span className="error">This field is required</span>}
      <input type="submit" />
    </form>
      
  );
};

export default Shipment;