// const express = require('express');
const mongoose = require("mongoose");
const todoList = require("../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const data = await todoList.create(req.body);
    console.log(data);
    res.setHeader("content-type", "application/json");
    res.status(201).json({
      status: "success",
      data: { data },
    }); 
  } catch (error) {
    res.status(404).json({
      status: "error",
      data: { msg: "error occured" },
    });
    console.log(error.message);
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const data = await todoList.find().sort({ price: "asc" });

    res.setHeader("content-type", "application/json");
    res.status(200).json({
      status: "success",
      count: data.length,
      // pages:   parseInt(req.query.page, 10),
      // pages: page,
      data: { data },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      data: { msg: "error to fetch data" },
    });
    console.log(error.message);
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.todoId;
  console.log('req.params', req.params)
  console.log(id);
  try {
    const deletedTodo = await todoList.findByIdAndDelete(id);
    console.log(deletedTodo);
    res.status(200).json({
      status: "success",
      data: {
        deletedTodo,
        msg: `product is successfully deleted with id ${id}`,
      },
    });
  } catch (error) {
    res.status(404).json({  
      status: "error",
      data: { msg: "something went wrong" },
    });
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.todoId;
  console.log('req.params', req.params)
  try {
    const { title } = req.body;
    const updatedTodo = await todoList.updateOne(
      { _id: id },
      {
        $set: req.body,
      }
    );
    res.status(201).json({
      status: "success",
      data: { updatedTodo },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      data: { msg: "something went wrong" },
    });
  }
};
