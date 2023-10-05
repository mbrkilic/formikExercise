import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {

    console.log(values)
    console.log(actions)

  // bir saniye sonra tıklanabilir olması için;
    await new Promise((resolve) => {
        setTimeout(resolve,1000)
    })
  //tıkladıktan sonra formu sıfırlamak için;
    actions.resetForm()

};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          placeholder="enter ur email address"
          className={errors.email ? 'input-error' : ''} // hata mesajını input error sınıfına göre şekillendir.
        />
        {errors.email && <p className="error">{errors.email}</p>} 
      </div>

      <div className="inputDiv">
        <label>Age</label>
        <input
          type="number"
          id="age"
          value={values.age}
          onChange={handleChange}
          placeholder="enter ur age"
          className={errors.age ? 'input-error' : ''}
        />
        {errors.age && <p className="error">{errors.age}</p>}
     
      </div>

      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          placeholder="enter ur password"
          className={errors.password ? 'input-error' : ''}
        />
        {errors.password && <p className="error">{errors.password}</p>}
    
      </div>

      <div className="inputDiv">
        <label>Password Confirm</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="enter ur password again"
          className={errors.confirmPassword ? 'input-error' : ''}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
       <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
    </form>
  );
}

export default GeneralForm;
