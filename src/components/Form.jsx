import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "-----Select category-----",
    location: "",
    cost: "",
    owner: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    /* Api Call Here*/
    setFormData({
      title: "",
      description: "",
      category: "",
      location: "",
      cost: "",
      owner: "",
    });
  };
  const handleReset = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      location: "",
      cost: "",
      owner: "",
    });
  };

  return (
    <div className="card border border-white shadow-lg p-4 bg-transparent blurred-background">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control border border-white shadow-lg bg-transparent"
                id="title"
                placeholder="Enter title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select border border-white shadow-lg bg-transparent"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">-----Select category-----</option>
                <option value="Travel">Travel</option>
                <option value="Adventure">Adventure</option>
                <option value="Personal Development">Personal Development</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control border border-white shadow-lg bg-transparent"
                id="location"
                placeholder="Enter location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="mb-3">
              <label htmlFor="cost" className="form-label">
                Cost
              </label>
              <input
                type="number"
                id="cost"
                placeholder="Enter cost"
                className="form-control border border-white shadow-lg bg-transparent"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            <div className="mb-3">
              <label htmlFor="owner" className="form-label">
                Owner
              </label>
              <input
                type="text"
                className="form-control border border-white shadow-lg bg-transparent"
                id="owner"
                placeholder="Enter owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control border border-white shadow-lg bg-transparent"
                  id="description"
                  rows={3}
                  placeholder="Enter description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>
          <div className="col-md-6">
            <button type="button" onClick={handleReset} className="btn btn-secondary w-100">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
