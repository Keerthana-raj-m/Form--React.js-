import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="left-half">
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just have to chat.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="input-labels">Name *</p>

              <input
                className="input"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                })}
              />

              {errors.name && (
                <span className="error">
                  {errors.name.type === "required" && "The field is required"}
                </span>
              )}
              <p className="input-labels">Email *</p>

              <input
                className="input"
                type="text"
                placeholder="Email"
                {...register("mail", {
                  required: true,
                })}
              />

              {errors.mail && (
                <span className="error">
                  {errors.mail.type === "required" && "The field is required"}
                </span>
              )}

              <p className="input-labels">Phone *</p>

              <input
                className="input"
                type="text"
                placeholder="Phone"
                {...register("phone", {
                  required: true,
                })}
              />

              {errors.phone && (
                <span className="error">
                  {errors.phone.type === "required" && "The field is required"}
                </span>
              )}
              <div>
                <div>
                  <p className="input-labels">Message *</p>

                  <input
                    className="input"
                    type="text"
                    placeholder="Write your message here..."
                    {...register("message", {
                      required: true,
                    })}
                  />

                  {errors.message && 
                  <span className="error">This field is reqired</span>}
                
                <div>
                  <input
                    className="submit"
                    type="submit"
                    value="Send Message"
                  />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="column">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="picture"/>
        </div>
      </div>
    </div>
  );
}

export default App;
