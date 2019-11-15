const dateProvider = {
  parseStringDate: strDate => new Date(strDate),
  formatStringDate: (strDate) => {
    const date = dateProvider.parseStringDate(strDate)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
}

export default dateProvider
