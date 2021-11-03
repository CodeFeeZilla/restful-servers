import React from "react";
import { Form, Field } from "react-final-form";

const RestaurantForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.name) {
          errors.name = "You must enter a name";
        }

        if (!formValues.image) {
          errors.image = "You must enter an image URL";
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="name" component={renderInput} label="Enter a Name" />
          <Field
            name="image"
            component={renderInput}
            label="Enter a image URL"
          />
          <button className="ui primary button">Submit</button>
        </form>
      )}
    />
  );
};

export default RestaurantForm;
