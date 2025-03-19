import CardTask from "@/components/card/task/page";
import Filter from "@/components/Filter";

import { Separator } from "radix-ui";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <Filter />
      <Separator.Root className="bg-(--primary)  data-[orientation=horizontal]:h-px w-full" />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 p-4 justify-center w-7xl ">
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
        <CardTask />
      </div>
    </div>
  );
}
