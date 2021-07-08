import React from "react";
const ListItem = ({ name, id, img }) => {
  return (
    <div className="p-4 border-2 border-gray-400 flex space-x-2">
      <div className="w-12 h-12 bg-gray-500">
        {/* <img src={img} alt={name} /> */}
      </div>
      <div className="">
        <h4>Name : {name}</h4>
        <p>empId : {id}</p>
      </div>
    </div>
  );
};

export default ListItem;
