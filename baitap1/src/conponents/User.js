import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const User = (props) => {
  const { user } = props;
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1>User Page</h1>
      <div className="row">
        {user.map((item) => (
          <div className="col-3 card my-4" key={item.id}>
            <img
              src="https://sm.mashable.com/t/mashable_in/news/c/constantly/constantly-stressed-at-work-it-might-actually-be-changing-yo_cqv3.1200.jpg"
              className="card-img-top"
              alt="Csdvd"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{item.name} :</li>
              <li className="list-group-item">{item.email}</li>
              <li className="list-group-item">Phone:</li>
            </ul>
            <div className="card-body">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/UseDetails", { state: item })}
              >
                Show more details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
