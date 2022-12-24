import axios from 'axios';

export const getTransferenciaParam = async (contaId, dtInicio, dtFim, operador) => {
  if (!contaId && !dtInicio && !dtFim && !operador) {
    return await axios.get(`/transferencias`);
  }
  if (contaId === null && operador === null) {
    return await axios.get(`/transferencias?dataCriacaoInicio=${dtInicio}&dataCriacaoFim=${dtFim}`);
  }
  return await axios.get(`/transferencias?dataCriacaoInicio=${dtInicio}&dataCriacaoFim=${dtFim}&nomeOperador=${operador}`);
}