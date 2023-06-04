import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useTask from "../../Hook/useTask";

const Modal = ({ editTask }) => {
  const [, refetch] = useTask();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const name = data.title;
    const photo = data.photo;
    const description = data.description;
    const status = data.status;
    const updateTask = { name, photo, description, status };
    fetch(
      `https://task-management-server-lemon.vercel.app/tasks/${editTask._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateTask),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Updated toy successfully",
          });
          window.my_modal_5.close();
        }
      });
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card flex-shrink-0 w-1/2 max-w-sm p-4  bg-base-100 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            defaultValue={editTask?.name}
            {...register("title", { required: true })}
            placeholder="Enter Title"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            defaultValue={editTask?.photo}
            {...register("photo", { required: true })}
            placeholder="Enter Photo Url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            defaultValue={editTask?.description}
            {...register("description", { required: true })}
            placeholder="Enter Description"
            className="input input-bordered"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input
            type="text"
            defaultValue={editTask?.status}
            {...register("status", { required: true })}
            placeholder="Enter status"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-orange-300 p-2 text-xl rounded-lg text-white"
            type="submit"
            value="Edit task"
          />
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
