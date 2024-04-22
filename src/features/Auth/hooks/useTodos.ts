import { useQuery } from "@tanstack/react-query";
import todoServices, { Todo } from "../todoServices";

export const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: ["todo"],
    queryFn: todoServices.getAll,
  });
