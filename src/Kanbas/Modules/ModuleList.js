import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col">
        <button 
            className="btn btn-primary" 
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
          <button 
            className="btn btn-success" 
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <input 
            className="form-control inline-block" 
            value={module.name} 
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            placeholder="Module Name"
          />
          <textarea 
            className="form-control" 
            value={module.description} 
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            placeholder="Module Description"
          ></textarea>
        </div>
      </div>

      <ul className="list-group">
        {modules.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index} className="list-group-item">
            <button 
              className="btn btn-danger" 
              onClick={() => dispatch(deleteModule(module._id))}
            >
              Delete
            </button>
            <button 
              className="btn btn-success" 
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;
