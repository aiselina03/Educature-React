import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
function AddPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  function getAll() {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  function handleAdd(val) {
    fetch("http://localhost:9000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  function deleteById(id) {
    fetch("http://localhost:9000/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }
  return (
    <>
      <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>{" "}
      <div className="nav"></div>
      <div className="addpage">
        <div className="form">
          <Formik
            initialValues={{ name: "", desc: "", price: "", image: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("name"),
              image: Yup.string().required("image"),
              desc: Yup.string().required("desc"),
              price: Yup.number().required("price"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                handleAdd(values);
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            <Form className="forms">
              <label htmlFor="image"></label>
              <Field
                name="image"
                type="text"
                className="field"
                placeholder="image"
              />
              <ErrorMessage name="image" />

              <label htmlFor="name"></label>
              <Field
                name="name"
                type="text"
                className="field"
                placeholder="name"
              />
              <ErrorMessage name="name" />

              <label htmlFor="desc"></label>
              <Field
                name="desc"
                type="text"
                className="field"
                placeholder="desc"
              />
              <ErrorMessage name="desc" />

              <label htmlFor="price"></label>
              <Field
                name="price"
                type="text"
                className="field"
                placeholder="price"
              />
              <ErrorMessage name="price" />

              <button type="submit">ADD</button>
            </Form>
          </Formik>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Desc</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((x) => (
                <tr key={x._id}>
                  <td>
                    <i className={x.image}></i>
                  </td>
                  <td>{x.name}</td>
                  <td>{x.desc}</td>
                  <td>${x.price}</td>
                  <td>
                    <button onClick={() => deleteById(x._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddPage;
