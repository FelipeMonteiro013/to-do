import { CheckCircledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { Separator } from "radix-ui";

const CardTask = () => {
  return (
    <div className="w-[280px] flex flex-col gap-2 bg-mauve6 shadow-[0_2px_10px] shadow-black/10 p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Title</h1>
        <div className="flex gap-2">
          <CheckCircledIcon color="blue"  />
          <DotsVerticalIcon color="blue" />
        </div>
      </div>
      <Separator.Root className="bg-(--primary)  data-[orientation=horizontal]:h-px" />
      <h2 className="font-bold">Descrição:</h2>
      <p className="line-clamp-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi qui
        officia natus quis, quasi voluptate fugiat ipsa sapiente tempore optio.
        Voluptatem non eum tenetur reiciendis dolores magnam veritatis nesciunt
        dolorum?
      </p>
      <div className="flex items-center justify-between ">
        <div className="font-bold ">Categoria:</div>
        <div>Estudos</div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="font-bold ">Prioridade:</div>
        <div>Alta</div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="font-bold ">Data de entrega:</div>
        <div>10/10/2021</div>
      </div>
      <button className="w-full text-(--primary) font-bold">Ver detalhes</button>
    </div>
  );
};

export default CardTask;
