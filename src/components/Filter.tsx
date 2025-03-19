import React from "react";
import FilterSelect from "./select/FilterSelect";
import { CalendarIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

export default function Filter() {
  const categoryList = ["Estudos", "Trabalho", "Lazer", "Outros"];
  const priorityList = ["Alta", "Média", "Baixa"];
  const statusList = ["Pendente", "Concluído"];

  return (
    <div>
      <h1 className="font-bold">Filtros</h1>
      <div className="flex gap-4 my-2">
        <FilterSelect placeholder="Categoria" filterList={categoryList} />
        <FilterSelect placeholder="Prioridade" filterList={priorityList} />
        <FilterSelect placeholder="Status" filterList={statusList} />
        <IconButton size="4" color="blue">
          <CalendarIcon width="30" height="30" />
        </IconButton>
      </div>
    </div>
  );
}
