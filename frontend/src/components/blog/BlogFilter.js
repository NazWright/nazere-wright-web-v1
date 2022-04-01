// blog filter has a form with inputs, and a function is sent back to the container to update the state.
// on input change, change the state of this field, state names from Blog Container will match the names of the inputs here
import React from "react";
import Form from "../lib/Form/Form";
import DropDown from "../lib/DropDown/DropDown";
import Button from "../lib/Button/Button";

/**
 * @function BlogContainer
 * Component contains form responsible for filtering through the blog listing content on /blog.
 * @author Nazere Wright
 * @props handleChange - callback for changing the value of an input on the form.
 * @props resetFunction - callback for toggling the reset of form values.
 */
export default function BlogFilter({ handleChange, resetFunction }) {
  return (
    <Form className="blog-filter mb-4" onSubmit={resetFunction}>
      <Form.Input
        type="text"
        className={"blog-filter-control"}
        name="articleName"
        placeholder="Search by name"
        onChange={(event) => handleChange("articleName", event.target.value)}
      />
      <Form.Input
        type="text"
        name="author"
        className={"blog-filter-control"}
        placeholder="Search by author's name"
        onChange={(event) => handleChange("author", event.target.value)}
      />

      <DropDown
        className={"blog-filter-control"}
        onChange={(event) => handleChange("date", event.target.value)}
      >
        <DropDown.Option
          selected={true}
          hidden={true}
          disabled={true}
          onChange={(event) => handleChange("date", event.target.value)}
        >
          Sort by Date
        </DropDown.Option>
        <DropDown.Option value={true}>Date: Ascending Order</DropDown.Option>
        <DropDown.Option value={false}>Date: Descending Order</DropDown.Option>
      </DropDown>

      <DropDown
        className={"blog-filter-control"}
        onChange={(event) => handleChange("views", event.target.value)}
      >
        <DropDown.Option selected={true} hidden={true} disabled={true}>
          Sort by Views
        </DropDown.Option>
        <DropDown.Option value={true}>Views: Ascending Order</DropDown.Option>
        <DropDown.Option value={false}>Views: Descending Order</DropDown.Option>
      </DropDown>

      <Button type="submit">Reset</Button>
    </Form>
  );
}
