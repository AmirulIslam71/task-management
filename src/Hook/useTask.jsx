import { useQuery } from "@tanstack/react-query";

const useTask = () => {
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(
        "https://task-management-server-lemon.vercel.app/tasks"
      );
      return res.json();
    },
  });
  return [tasks, refetch];
};

export default useTask;
