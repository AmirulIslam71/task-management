import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.title;
    const photo = data.photo;
    const description = data.description;
    const status = data.status;
    const addTask = { name, photo, description, status };
    fetch("https://task-management-server-lemon.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Task add successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className=" bg-gradient-to-r from-slate-100 to-red-400  py-8">
      <div className="w-2/4 mx-auto text-center mb-8 space-y-0 ">
        <h1 className="text-2xl uppercase text-amber-700">Add some task</h1>
        <div className="divider w-2/5 mx-auto "></div>
        <p className="text-sm text-amber-900">
          Utilizing efficient task management techniques, individuals and teams
          can prioritize, track, and delegate tasks effectively, leading to
          improved efficiency and overall success.
        </p>
      </div>
      <div>
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
              {...register("title", { required: true })}
              placeholder="Enter Title"
              className="input input-bordered"
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="Enter Photo Url"
              className="input input-bordered"
            />
            {errors.photo && (
              <span className="text-red-500">Photo url is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              {...register("description", { required: true })}
              placeholder="Enter Description"
              className="input input-bordered"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              {...register("status", { required: true })}
              placeholder="Enter status"
              className="input input-bordered"
            />
            {errors.status && (
              <span className="text-red-500">Status is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-orange-300 p-2 text-xl rounded-lg text-white"
              type="submit"
              value="Add Task"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
