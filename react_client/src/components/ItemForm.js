import React from "react";
import { Form, Field } from "react-final-form";
import Select from "react-select";
import { Form as SForm } from "semantic-ui-react";

const ItemForm = (props) => {
  const id = props.initialValues
    ? props.initialValues.restaurant_id || props.initialValues.menuId
    : null;

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

  const renderDropDown = ({
    input,
    label,
    meta,
    options,
    selected,
    ...rest
  }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <Select
          {...input}
          {...rest}
          fluid
          options={options}
          placeholder="Restaurant"
          //   value={options.find((option) => option.value === id).value}
        />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);

    props.onSubmit({
      name: formValues.name,
      price: formValues.price,
      menu_id: formValues.menu_id.value,
    });
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.name) {
          errors.title = "You must enter a name";
        }

        if (!formValues.price) {
          errors.price = "You must enter a price";
        }

        if (!formValues.menu_id) {
          errors.menu_id = "You must state which menu the item belongs to";
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="name" component={renderInput} label="Enter Item Name" />
          <Field
            name="price"
            component={renderInput}
            label="Enter Item Price"
          />
          <Field
            name="menu_id"
            component={renderDropDown}
            label="Select Which Menu the Item Belongs To"
            options={props.options}
          />
          <button className="ui primary button">Submit</button>
        </form>
      )}
    />
  );
};

export default ItemForm;
