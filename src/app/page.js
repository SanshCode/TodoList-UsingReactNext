"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandaler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title: title, desc: desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (i) => {
    let copyData = [...mainTask]
    copyData.splice(i,1)
    setMainTask(copyData)
  }
  let renderData = <h2>NO TASK AVAILABLE</h2>;
  if (mainTask.length > 0) {
    renderData = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between mb-5">
          <div className="flex justify-between  w-2/3">
            <h2 className="text-2xl font-semibold">{t.title}</h2>
            <h5 className="text-lg font-light">{t.desc}</h5>
          </div>
          <button onClick={
            () => {
            deleteHandler(i)
          }} className="text-white bg-red-400 p-2 rounded">Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-center p-5 m-5 text-5xl font-bold ">
        My ToDo's List
      </h1>
      <form className="m-5 " onSubmit={submitHandaler}>
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-black text-white rounded font-bold text-2xl p-3 m-5"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter Description"
          className="bg-black text-white rounded font-bold text-2xl p-3 m-5"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-black text-white rounded font-bold text-2xl p-3 m-5">
          Add Item
        </button>
      </form>
      <hr />
      <div className=" m-5 p-8 bg-slate-200">
        <ul>{renderData}</ul>
      </div>
    </>
  );
};

export default page;
