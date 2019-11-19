const interpolate = (a, b, f) => a.map((_, idx) => Math.floor(a[idx] * (1 - f) + b[idx] * f))

const rgbToHex = (rgb) => {
  const rgbHex = rgb.map(c => c.toString(16))
  const rgbHexNormalized = rgbHex.map(c => (c.length === 1 ? `0${c}` : c))

  return `#${rgbHexNormalized.join('')}`
}

const generateColorPalette = (size) => {
  const start = [255, 221, 160]
  const end = [255, 89, 88]

  const generatedColors = []

  // eslint-disable-next-line
  for (let i = 0; i < size; i++) {
    generatedColors.push(
      rgbToHex(interpolate(start, end, i / (size - 1)))
    )
  }

  return generatedColors
}

export default generateColorPalette
