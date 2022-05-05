import React from "react";
import styled from 'styled-components'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

    return (
      <>
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
            </form>
            <div>
  {/* <Button color="primary">primary</Button>
  <Button color="secondary">secondary</Button>
  <Button color="success">success</Button>
  <Button color="info">info</Button>
  <Button color="warning">warning</Button>
  <Button color="danger">danger</Button>
  <Button color="link">link</Button> */}
</div>
      </>
  );
}