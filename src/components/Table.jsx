import React, { useEffect, useState } from "react";
import { getBucketLists, getBucketList } from "../helpers/axiosHelper";
import { FaTrash, FaArrowRight } from "react-icons/fa";
import { ListDetails } from "../pages/ListDetails";

export const Table = ({ logedInUser, fetchFromAPI, listItems }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [clickedItem, setClickedItem] = useState({});

  useEffect(() => {
    fetchFromAPI();
  }, []);

  const listed = listItems?.filter((item) => item.status === "listed");
  const ticked = listItems?.filter((item) => item.status === "ticked");

  const handOnDelete = (_id) => {
    console.log(_id);
  };

  const tickList = (_id) => {
    console.log(_id);
  };

  const handleShowDetails = async (id) => {
    const { data } = await getBucketList(logedInUser._id, id);
    setClickedItem(await data);
    setShowDetails(true);
  };

  return (
    <div className="card border border-white shadow-lg p-4 bg-transparent glasscard">
      <div className="row">
        <div className="col-md">
          <h3 className="text-center">Bucket List</h3>
          <hr />
          <table className="table-transparent table table-hover">
            <thead>
              <tr>
                <td>#</td>
                <td>Title</td>
                <td>Location</td>
                <td>Category</td>
                <td>Cost</td>
              </tr>
            </thead>
            <tbody id="listed" className="table-group-divider">
              {listed.map((item, i) => (
                <tr key={i} onClick={() => handleShowDetails(item._id)}>
                  {/* <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handleOnSelect}
                      value={item._id}
                      checked={idsToDelete.includes(item._id)}
                    />
                  </td> */}
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.location}hrs</td>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
                  {/************  Buttons to be replaced by model  ************* }
                  <td className="text-end">
                    <button
                      onClick={() => handOnDelete(item._id)}
                      className="btn btn-danger btn-sm"
                    >
                      <FaTrash />
                    </button>
                    <button onClick={() => tickList(item._id)} className="btn btn-success btn-sm">
                      <FaArrowRight />
                    </button>
                  </td>
                  {*******************************/}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-md">
          <h3 className="text-center">Ticked List</h3>
          <hr />
          <table className="table table-hover table-transparent">
            <thead>
              <tr>
                <td>#</td>
                <td>Title</td>
                <td>Location</td>
                <td>Category</td>
                <td>Cost</td>
              </tr>
            </thead>
            <tbody id="checked" className="table-group-divider">
              <tr>
                <td>1.</td>
                <td>Bungee Jump</td>
                <td>Bhote Koshi</td>
                <td>Adventure</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Bungee Jump</td>
                <td>Bhote Koshi</td>
                <td>Adventure</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>1.</td>
                <td>Bungee Jump</td>
                <td>Bhote Koshi</td>
                <td>Adventure</td>
                <td>10000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ListDetails
        setShowDetails={setShowDetails}
        showDetails={showDetails}
        clickedItem={clickedItem}
      />
    </div>
  );
};
