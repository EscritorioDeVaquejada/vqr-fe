class Currency {
  numberToCurrency(amount: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(amount);
  }
}

export default new Currency();
