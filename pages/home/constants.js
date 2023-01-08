import * as ImagePicker from "expo-image-picker"
export const ImagePickerOption = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: false,
  aspect: [16, 9],
  quality: 1,
}

export const snapshotOption = {
  result: "tmpfile",
  quality: 1,
  format: "jpg",
}
