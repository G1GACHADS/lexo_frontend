export const getOptimalRatio = (ratios) => {
  // const ratio =
  //   ratios.find((ratio) => ratio === '20:9') ||
  return ratios[ratios.length - 1]
}

export const createFormData = (image, fixation, saccade) => {
  const data = new FormData()
  data.append('image', {
    uri: image,
    type: 'image/jpeg',
    name: 'image.jpg',
  })
  data.append('fixation', fixation)
  data.append('saccade', saccade)
  return data
}

export const toggleCameraType = () =>
  setType((current) =>
    current === CameraType.back ? CameraType.front : CameraType.back
  )
