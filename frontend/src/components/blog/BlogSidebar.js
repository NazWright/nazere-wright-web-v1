import React, { useState } from "react";
import BlogFilter from "./BlogFilter";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

/**
 * @function BlogSidebar
 * The sidebar component that is found on /blog that encapsulates the BlogFilter component.
 * This component handles logic of sidebar toggling, and resetting the values in the blog filter.
 * @props handleChange - callback for changing the value of an input on the form.
 * @props resetFunction - callback for toggling the reset of form values.
 * @author Nazere Wright
 */

export default function BlogSidebar({ handleChange, resetFunction }) {
  const [opened, setOpened] = useState(false);

  // opening, closing sidebar...
  const handleSidebar = () => {
    setOpened(!opened);
  };

  return (
    <div className={`blog-filter-sidebar ${opened && "show"}`}>
      <div className="filter-container-blog d-flex justify-content-end">
        {opened ? (
          <FaArrowCircleLeft size={25} onClick={handleSidebar} />
        ) : (
          <FaArrowCircleRight size={25} onClick={handleSidebar} />
        )}
      </div>

      <div
        style={{
          padding: "1rem",
          display: opened ? undefined : "none",
        }}
      >
        {" "}
        <h2>Filter Articles</h2>
        <div className="filter-container-blog">
          <BlogFilter
            handleChange={handleChange}
            resetFunction={resetFunction}
          />
        </div>{" "}
      </div>

      {opened && <div className="overlay-div"></div>}
    </div>
  );
}
