/* eslint-disable @next/next/no-img-element */
import styles from "@/styles";
import Image from "next/image";
import { useState } from "react";
import Button from "../reusable-ui/Button";
import axios from "axios";

export default function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(inputData);
    const response = await axios.post(`/api/sendgridAPI`, inputData);
    console.log(response);
  };

  return (
    <div className="flex w-[100%] bg-secondary pt-20 pb-10 px-10 relative">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[60%] w-[100%] sm:items-start items-center flex flex-col gap-[40px] "
      >
        <div className="sm:w-[100%] ss:flex-row flex-col w-[100%] flex gap-[40px]">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom"
            required
            onChange={handleChange}
            autoComplete="name"
            className={`${styles.text} ${styles.input} sm:w-6/12  w-[100%] py-2 px-4 `}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={handleChange}
            autoComplete="email"
            className={`${styles.text} ${styles.input} sm:w-6/12 w-[100%]  py-2 px-4 `}
          />
        </div>

        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows={1}
          onChange={handleChange}
          required
          className={`${styles.text} ${styles.input} w-[100%] py-2 px-4 `}
        ></textarea>
        <Button label="Envoyez" route="" />
      </form>

      <div className="sm:w-6/12 relative">
        <img
          src="./contact.png"
          alt="alizeeplazen"
          className="w-[90%] absolute sm:block hidden right-[-10%] bottom-[0%]"
        />
      </div>
    </div>
  );
}
