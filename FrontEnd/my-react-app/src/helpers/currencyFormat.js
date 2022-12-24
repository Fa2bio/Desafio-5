export const currencyFormat = (num=0) => {
    return new Intl
      .NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(num);
  }