import { Plus } from "@phosphor-icons/react";
import { Button } from "@radix-ui/themes";

function AddTaskButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="flex items-center gap-2 bg-(--primary) text-white p-2 rounded-md cursor-pointer"
      onClick={onClick}
    >
      <Plus /> Adicionar tarefa
    </Button>
  );
}

export default AddTaskButton;
