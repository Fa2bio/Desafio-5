import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { getTransferenciaParam } from '../api/transferencias'
import moment from 'moment';
import { currencyFormat, dateFormat } from '../helpers/';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Container, Button, IconButton
} from '@mui/material';
import { BiCalendarEdit, BiPencil } from "react-icons/bi"; 
 
export const Transferencias = () => {
  const initialState = {
    contaId: 0 || null,
    dataCriacaoInicio: '',
    dataCriacaoFim: '',
    nomeOperador: '' || null
  }

  const saldoState = {
    saldoTotal: 0
  }

  const [transferencias, setTransferencias] = useState([]);
  const [transferencia, setTransferencia] = useState(initialState);  
  const [saldoTotal, setSaldoTotal] = useState(saldoState);
  const saldoPeriodo = useMemo(() => transferencias.reduce((total, item) => total = total + item.valor,0));
  
  const getTransfer = useCallback(() => {
    try {
      getTransferenciaParam().then((response) => {
          setTransferencias(response.data._embedded.transferenciaModelList);
          setSaldoTotal(response.data._embedded.transferenciaModelList.reduce((total, item) => total = total + item.valor,0))
        }
      )
    } catch (error) {
      console.log(error);
    }
  }, [])

  
  useEffect(() => {
    getTransfer();
  }, [getTransfer]) 

  const handleChangeDtCriacaoInicio = (newValue) => {
    setTransferencia({
      ...transferencia,
      dataCriacaoInicio: moment(newValue._d).toISOString()
    })
  }

  const handleChangeDtCriacaoFim = (newValue) => {
    setTransferencia({
      ...transferencia,
      dataCriacaoFim: moment(newValue._d).toISOString()
    })
  }

  const handleChangeNomeOperador = (e) => {
    setTransferencia({
      ...transferencia,
      nomeOperador: e.target.value
    })
  }

  const submitSearch = () => {
    const { 
      contaId,
      dataCriacaoInicio,
      dataCriacaoFim,
      nomeOperador
    } = transferencia

    getTransferenciaParam(
      contaId,
      dataCriacaoInicio,
      dataCriacaoFim,
      nomeOperador
    ).then((response) => {
      console.log('res', response);
      setTransferencias(response.data._embedded.transferenciaModelList);

      console.log('transferencias', transferencias);
    })
  }  

  const rowsList = transferencias.map((item, index) => {
    return (
      <TableRow key={index}>
        <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{dateFormat(item.dataTransferencia)}</TableCell>
        <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{currencyFormat(item.valor)}</TableCell>
        <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{item.tipo}</TableCell>
        <TableCell align="center" sx={{ fontSize: '1.2rem' }}>{item.nomeOperador}</TableCell>
      </TableRow>
    )
  })

  const bgTituloStyle = {
    fontSize: '1.5rem',
    color: ['antiquewhite']
  }
  const color = 'antiquewhite'

  return (
    <div className='area-transferencias'>
      
      <h3 >Transferências</h3>
      <div className="area_transferencia">

        <Container maxWidth={'md'}>

          <Box display={'flex'} justifyContent={'space-between'}>
            <Box>
              <DatePicker         
                label="Data Início"
                inputFormat='DD/MM/YYYY'
                value={transferencia.dataCriacaoInicio || null}
                onChange={(newVal) => handleChangeDtCriacaoInicio(newVal) }                
                renderInput={(params) => <TextField  {...params}
                    InputProps={{endAdornment: (<IconButton><BiCalendarEdit/></IconButton>)}}
                    sx={{input: {color}, label: {color}}}e
                />} 
                />
            </Box>

            <Box>
              <DatePicker                 
                label="Data Fim"
                inputFormat='DD/MM/YYYY'
                value={transferencia.dataCriacaoFim || null}              
                onChange={(newVal) => handleChangeDtCriacaoFim(newVal)}                
                renderInput={(params) => <TextField {...params} 
                    InputProps={{endAdornment: (<IconButton><BiCalendarEdit/></IconButton>)}}
                    sx={{input: {color}, label: {color}}}
                />}                
              />
            </Box>

            <Box>
              <TextField sx={{input: {color}, label: {color}}}
                label="Operador"
                variant="outlined"
                value={transferencia.nomeOperador || ''}
                onChange={(e) => handleChangeNomeOperador(e)}
                InputProps={{endAdornment: (<IconButton><BiPencil/></IconButton>)}}
                renderInput={(params) => <TextField {...params}/>}
                
              />
            </Box>
          </Box>

          <Box margin={'25px 0'} display={'flex'} justifyContent={'end'}>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={submitSearch}
              >
                Buscar
              </Button>
            </Box>
          </Box>

          <Box margin={'15px 0'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Box>
              <span>Saldo Total:</span> <span className='result'>{currencyFormat(saldoTotal)}</span>
            </Box>
            <Box>
              <span>Saldo no período:</span> <span className='result'>{currencyFormat(saldoPeriodo)}</span>
            </Box>
          </Box>

          <TableContainer component={Paper}>

            <Table aria-label="simple table">

              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={bgTituloStyle}>Dados</TableCell>
                  <TableCell align="center" sx={bgTituloStyle}>Valentia</TableCell>
                  <TableCell align="center" sx={bgTituloStyle}>Tipo</TableCell>
                  <TableCell align="center" sx={bgTituloStyle}>Nome operador</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rowsList}
              </TableBody>

            </Table>

          </TableContainer>

        </Container>

      </div>

    </div>
  )
}