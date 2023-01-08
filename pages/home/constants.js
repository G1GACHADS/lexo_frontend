import * as ImagePicker from "expo-image-picker"
export const ImagePickerOption = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: false,
  aspect: [4, 3],
  quality: .5,
}

export const snapshotOption = {
  result: "tmpfile",
  quality: .5,
  format: "jpg",
}
