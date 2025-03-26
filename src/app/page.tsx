"use client";

import CardTask from "@/components/card/task/page";
import Filter from "@/components/Filter";

import AddTaskButton from "@/components/button/AddTaskButton";
import React, { useEffect, useState } from "react";
import { CardTaskProps } from "../components/card/task/page";
import AddTaskDialog from "@/components/dialog/AddTaskDialog";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import AddTaskDialogRadix from "@/components/dialog/AddTaskDialogRadix";
import {
  Divider,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Popper,
  PopperPlacementType,
  SelectChangeEvent,
  Typography
} from "@mui/material";
import Select from "@mui/material/Select";

export default function Home() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList") || "[]")
  );

  useEffect(() => {
    localStorage.getItem("tasks");
  }, [taskList]);

  localStorage.setItem(
    "taskList",
    JSON.stringify([
      {
        id: 1,
        title: "Comprar pão",
        category: "Compras",
        priority: "Baixa",
        deliveryDate: "21/03/2025",
        isDone: true
      },
      {
        id: 2,
        title: "Levar carro no mecanico",
        description: " teste teste teste teste ",
        category: "Carro",
        priority: "Média",
        deliveryDate: "21/03/2025",
        isDone: false
      },
      {
        id: 3,
        title: "Estudar React",
        description: " teste teste teste teste ",
        category: "Estudos",
        priority: "Alta",
        deliveryDate: "21/03/2025",
        isDone: false
      },
      {
        id: 4,
        title: "Estudar React",
        description: " teste teste teste teste ",
        category: "Estudos",
        priority: "Alta",
        deliveryDate: "21/03/2025",
        isDone: false
      },
      {
        id: 5,
        title: "Estudar React",
        description: " teste teste teste teste ",
        category: "Estudos",
        priority: "Alta",
        deliveryDate: "21/03/2025",
        isDone: false
      }
    ])
  );

  const onChangeTaskDone = (taskId: number) => {
    const newTask = taskList.map((item: { id: number; isDone: boolean }) => {
      if (item.id === taskId) {
        return {
          ...item,
          isDone: !item.isDone
        };
      }
      return item;
    });

    setTaskList(newTask);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [openPopper, setOpenPopper] = useState(false);

  const handlePoppreClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // console.log(newPlacement);
      console.log(event.currentTarget);
      // console.log(event.currentTarget.offsetLeft);

      setAnchorEl(event.currentTarget);
      setOpenPopper(!openPopper);
    };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div>
        <AddTaskDialog />
        <Filter />
        <Divider className="py-2" />
        <Popper open={openPopper} anchorEl={anchorEl} onMouseLeave={() => setOpenPopper(false)}>
          <Paper>
            <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
          </Paper>
        </Popper>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 p-4 justify-center">
          {taskList.map((item: CardTaskProps) => (
            <CardTask
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              category={item.category}
              priority={item.priority}
              deliveryDate={item.deliveryDate}
              isDone={item.isDone}
              onClick={() => onChangeTaskDone(item.id)}
              openPopper={handlePoppreClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
