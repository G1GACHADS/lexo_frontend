import * as ImagePicker from 'expo-image-picker'

export const ImagePickerOption = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: true,
  quality: 0.5,
}

export const snapshotOption = {
  result: 'tmpfile',
  quality: 0.5,
  format: 'jpg',
}
