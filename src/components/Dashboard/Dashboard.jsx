import ListItem from "@components/ListItem";
import { useAuth } from "@services";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
  const [displayData, setDisplayData] = useState([]);

  const history = useHistory();
  const { signout } = useAuth();
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  useEffect(() => {
    realFetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setDisplayData(data);
        console.log(data);
      });
  }, []);

  const logOut = () => {
    signout();
    history.push("/login");
  };
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-end bg-blue-300 p-4">
        <button className="btn" type="button" onClick={logOut}>
          Log Out
        </button>
      </div>
      <div className="flex justify-center">
        {displayData.length !== 0 ? (
          <section>
            <div className="border-2 border-gray-400 shadow-md p-4 mt-4">
              <div className="space-y-2">
                {displayData.map((obj) => {
                  return (
                    <ListItem
                      key={obj.id}
                      name={obj.name}
                      id={obj.id}
                      img={obj.img}
                    />
                  );
                })}
              </div>
              <div className="pagination_wrapper"></div>
            </div>
          </section>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};
