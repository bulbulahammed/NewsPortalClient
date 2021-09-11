import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../Shared/Navbar/Navbar";

const AddNews = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNews;
