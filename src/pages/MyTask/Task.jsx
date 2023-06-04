import Swal from "sweetalert2";
import useTask from "../../Hook/useTask";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

const Task = () => {
  const [tasks, refetch] = useTask();
  const [editTask, setEditTask] = useState(null);

  const handleDelete = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://task-management-server-lemon.vercel.app/tasks/${task._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleEdit = (task) => {
    setEditTask(task);
    window.my_modal_5.showModal();
  };

  return (
    <div className="overflow-x-auto my-10">
      <h1 className="text-center pb-8 text-2xl">My task here</h1>
      <table className="table">
        {/* head */}
        <thead className="uppercase bg-[#D1A054] text-white">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>title</th>
            <th>status</th>
            <th>description</th>
            <th>edit</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <th>
                <label>{index + 1}</label>
              </th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={task.photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.description}</td>
              <td>
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-amber-500 p-1 rounded text-white text-end"
                >
                  <FaEdit></FaEdit>
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(task)}
                  className="bg-red-500 p-1 rounded text-white text-end"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Open the modal using ID.showModal() method */}
      <Modal editTask={editTask}></Modal>
    </div>
  );
};

export default Task;
