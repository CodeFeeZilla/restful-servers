import React from "react";
import { Form, Field } from "react-final-form";

const MenuForm = (props) => {
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

  //   const renderDropDown = ({
  //     input,
  //     label,
  //     meta,
  //     options,
  //     selected,
  //     ...rest
  //   }) => {
  //     const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  //     return (
  //       <div className={className}>
  //         <label>{label}</label>
  //         <Select
  //           {...input}
  //           {...rest}
  //           fluid
  //           options={options}
  //           placeholder="Restaurant"
  //           value={options.find((option) => option.value === id)}
  //         />
  //         {renderError(meta)}
  //       </div>
  //     );
  //   };

  const onSubmit = (formValues) => {
    console.log(formValues);
    props.onSubmit({
      title: formValues.title,
      restaurant_id: props.id,
    });
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.title) {
          errors.title = "You must enter a title";
        }

        // if (!formValues.restaurant_id) {
        //   errors.restaurant_id =
        //     "You must state which restaurant the menu belongs to";
        // }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field
            name="title"
            component={renderInput}
            label="Enter a Menu Title"
          />
          {/* <Field
            name="restaurant_id"
            component={renderDropDown}
            label="Select Which Restaurant the Menu Belongs To"
            options={props.options}
          /> */}
          <button className="ui primary button">Submit</button>
        </form>
      )}
    />
  );
};

export default MenuForm;
