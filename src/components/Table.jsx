import React, { useEffect, useState } from "react";
import { getBucketLists, getBucketList } from "../helpers/axiosHelper";
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
    <div className="border border-white shadow-lg p-4 item-bg">
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
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
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
              {ticked.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ListDetails
        setShowDetails={setShowDetails}
        showDetails={showDetails}
        clickedItem={clickedItem}
        fetchFromAPI={fetchFromAPI}
      />
    </div>
  );
};
