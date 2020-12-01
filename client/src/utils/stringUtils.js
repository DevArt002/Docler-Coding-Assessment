const getShortName = (name) => {
  let shortName = ''
  const sepStrs = name.split(' ')

  sepStrs.forEach((sepStr) => {
    if (sepStr.length !== 0) shortName += sepStr[0].toUpperCase()
  })

  return shortName
}

export default getShortName
