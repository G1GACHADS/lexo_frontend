import { Camera, CameraType } from "expo-camera";

// export const toggleCameraType = () =>
//   setType((current) =>
//     current === CameraType.back ? CameraType.front : CameraType.back
//   );
// export const toggleFlash = () =>
//   setFlashMode((current) => (current === "torch" ? "off" : "torch"));

// export const sendFetch = useCallback(async () => {
//   const data = new FormData();
//   data.append("image", {
//     uri: image,
//     type: "image/jpeg",
//     name: "image.jpg",
//   });
//   data.append("fixation", 1);
//   data.append("saccade", 10);
//   await Api.post("bionic", data, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//     .then((response) => {
//       console.log(response.data["html"]);
//       return response.data["html"];
//     })
//     .catch((e) => {
//       console.log(err);
//     });
// }, [image]);

export const optimal_ratio = (ratios) => {
  const ratio = ratios.find((ratio) => ratio === "20:9")||ratios[ratios.length-1];
  return ratio;
}