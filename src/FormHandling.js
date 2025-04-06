
import * as React from "react";

export default function FormHandling() {
  const [formData, setFormData] = React.useState({});
  const onchangeHandler = (e) => {
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      //eslint-disable-next-line no-restricted-globals
      [name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData)
    const data = await fetch("https://www.greatfrontend.com/api/questions/contact-form",{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
          },
    })
    const finaldata = data.json();
    console.log(finaldata)
  }
  return (
    <form
    //   method="post"
    //   action="https://www.greatfrontend.com/api/questions/contact-form"
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
    >
      <label for="name"> Name: </label>
      <input type="text" id="name" name="name" onChange={onchangeHandler} />

      <label for="email"> Email: </label>
      <input type="text" id="email" name="email" onChange={onchangeHandler} />

      <label for="message"> Message: </label>
      <textarea type="text" name="message" onChange={onchangeHandler} />

      <button type="submit" onClick={submitHandler}>Submit </button>
    </form>
  );
}
