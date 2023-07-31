"use client";
import { Container, FormControl, FormControlLabel, FormLabel, Radio, Button, RadioGroup, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { useState } from "react";

interface Contatinho {
  id: number,
  nome: string,
  genero: string,
  signo: number,

}


export default function Home() {
  const [contatinhos, setContatinhos] = useState<Contatinho[]>([])
  const [contatinho, setContatinho] = useState<Contatinho>({id: 0, nome: '', genero: '', signo: 0})
  

  return (
    <Container fixed>
      <Box component="div" sx={{
        width: '100%',
        height: '100%',
        margin: '10px',
        padding: '10px',
        backgroundColor: grey['200'],
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }} className={`rounded-lg `}>
        <Typography variant="h3" className={`text-center`}>
          Contatinhos
        </Typography>
        <Container className={`pt-4`}>
        <FormControl className={`w-[100%] gap-3`}>

          <TextField fullWidth label="Nome completo" onChange={(e) => setContatinho({...contatinho, nome: String(e.target.value)}) } />

          <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
          <RadioGroup row defaultValue="M" onChange={(e) => setContatinho({...contatinho, genero: String(e.target.value) })}>
            <FormControlLabel value="M" control={<Radio defaultChecked />} label="Masculino" />
            <FormControlLabel value="F" control={<Radio />} label="Feminino" />
          </RadioGroup>

          <FormLabel>Signo</FormLabel>
          <Select value={contatinho.signo} onChange={(e) => setContatinho({...contatinho, signo: Number( e.target.value) } ) }>
            <MenuItem value={1}>Áries</MenuItem>
            <MenuItem value={2}>Touro</MenuItem>
            <MenuItem value={3}>Gêmeos</MenuItem>
            <MenuItem value={4}>Câncer</MenuItem>
            <MenuItem value={5}>Leão</MenuItem>
            <MenuItem value={6}>Virgem</MenuItem>
            <MenuItem value={7}>Libra</MenuItem>
            <MenuItem value={8}>Escorpião</MenuItem>
            <MenuItem value={9}>Sagitário</MenuItem>
            <MenuItem value={10}>Capricórnio</MenuItem>
            <MenuItem value={11}>Aquário</MenuItem>
            <MenuItem value={12}>Peixes</MenuItem>
          </Select>
          
        </FormControl>
        <Container className="p-4">
          <div>
          <Button variant="contained" color="success" onClick={() => setContatinhos([...contatinhos, contatinho]) }>Salvar</Button>

          </div>
        </Container>
          
        </Container>
      </Box>
      

    </Container>
  );
}
