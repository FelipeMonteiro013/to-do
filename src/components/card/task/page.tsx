import { IconButton } from "@mui/material";
import { CheckCircle, Circle } from "@phosphor-icons/react";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react/dist/ssr";
// import { IconButton } from "@radix-ui/themes";
import { Separator } from "radix-ui";
import { useState } from "react";

export interface CardTaskProps {
  id: number;
  title: string;
  description?: string;
  category: string;
  priority: string;
  deliveryDate: string;
  isDone: boolean;
  onClick?: () => void;
  openPopper: Function;
}

const CardTask = (props: CardTaskProps) => {
  return (
    <div className="w-[280px]  bg-white flex flex-col justify-around gap-2 bg-mauve6 shadow-[0_2px_10px] shadow-black/10  rounded-xl">
      <div className="flex items-center justify-between px-4 py-2 ">
        <h1 className="text-2xl line-clamp-1 font-bold">{props.title}</h1>
        <div className="flex gap-1">
          <IconButton onClick={props.onClick}>
            {props.isDone === false ? (
              <Circle color="blue" width={25} height={25} />
            ) : (
              <CheckCircle weight="fill" color="green" width={25} height={25} />
            )}
          </IconButton>
          <IconButton
            onClick={props.openPopper("button")}
            
          >
            <DotsThreeOutlineVertical
              weight="fill"
              color="blue"
              width={22}
              height={22}
            />
          </IconButton>
        </div>
      </div>
      <Separator.Root className="bg-gray-200  data-[orientation=horizontal]:h-px" />

      <div className="  relative">
        <div
          className="px-4 flex flex-col gap-2 "
          onDoubleClick={props.onClick}
        >
          <div>
            <h2 className="font-bold">Descrição:</h2>
            <p className="line-clamp-3">{props.description}</p>
          </div>

          <div className="flex items-center justify-between ">
            <div className="font-bold ">Categoria:</div>
            <div>{props.category}</div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="font-bold ">Prioridade:</div>
            <div>{props.priority}</div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="font-bold ">Data de entrega:</div>
            <div>{props.deliveryDate}</div>
          </div>
        </div>
        <div
          hidden={props.isDone === false}
          className="bg-white absolute flex justify-center items-center  rounded-xl top-0 left-0 w-full h-full opacity-90"
        >
          <CheckCircle
            color="green"
            width={100}
            height={100}
            onClick={props.onClick}
            className="cursor-pointer"
            weight="fill"
          />
        </div>
      </div>
      <Separator.Root className="bg-(--primary)  data-[orientation=horizontal]:h-px" />

      <button className="w-full text-(--primary) font-bold pb-2">
        Ver detalhes
      </button>
    </div>
  );
};

export default CardTask;
