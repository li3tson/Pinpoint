/* eslint-disable @typescript-eslint/no-explicit-any */

const FormatResponseData = (valeu: any) => {
  let valueTranformated: any = ''

  switch (valeu) {
    case '':
      valueTranformated = '-'
      break
    case null:
      valueTranformated = '-'
      break
    case true:
      valueTranformated = 'Yes'
      break
    case false:
      valueTranformated = 'No'
      break
    default:
      valueTranformated = valeu
  }

  if (String(valueTranformated).length >= 40) {
    return `${String(valueTranformated).slice(0, 40)}...`
  } else {
    return valueTranformated
  }
}

export default FormatResponseData
