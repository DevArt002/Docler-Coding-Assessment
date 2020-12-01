const getTime = (date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  minutes = minutes < 10 ? `0${minutes}` : minutes
  const strTime24 = `${hours}:${minutes}`
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours %= 12
  hours = hours || 12 // the hour '0' should be '12'
  const strTime12 = `${hours}:${minutes} ${ampm}`

  return [strTime12, strTime24]
}

export default getTime
