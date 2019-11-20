export const now = () => new Date()

export const parseStringDate = strDate => new Date(strDate)

export const formatStringDate = (strDate) => {
  const date = parseStringDate(strDate)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export const isBeforeNow = (strDate) => {
  const diff = parseStringDate(strDate) - now()
  return diff < 0
}

export const isAfterNow = (strDate) => {
  const diff = parseStringDate(strDate) - now()
  return diff > 0
}
