import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { ArrowDown, CalendarDots } from "@phosphor-icons/react";
import FilterSelect from "./select/FilterSelect";

export default function Filter() {
  const categoryList = [
    "Estudos",
    "Trabalho",
    "Lazer",
    "Outros",
    "Quiropraxia"
  ];
  
  const priorityList = ["Alta", "Média", "Baixa"];
  const statusList = ["Pendente", "Concluído"];

  return (
    <div>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ArrowDown />}>
          <Typography component="span">Filtros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid2
            container
            gap={2}
            sx={{ justifyContent: "space-around", alignItems: "center" }}
          >
            <Grid2 size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
              <FilterSelect placeholder="Categoria" filterList={categoryList} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
              <FilterSelect
                placeholder="Prioridade"
                filterList={priorityList}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
              <FilterSelect placeholder="Status" filterList={statusList} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 1, lg: 1, xl: 1 }}>
              <IconButton>
                <CalendarDots />
              </IconButton>
            </Grid2>
          </Grid2>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
