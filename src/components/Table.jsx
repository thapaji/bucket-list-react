import React, { useState } from "react";

export const Table = () => {
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
            <tbody id="entry" className="table-group-divider">
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
    </div>
  );
};
