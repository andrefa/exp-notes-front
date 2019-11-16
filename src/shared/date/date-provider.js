export const parseStringDate = strDate => new Date(strDate)

export const formatStringDate = (strDate) => {
  const date = parseStringDate(strDate)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}
