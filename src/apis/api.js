export const preprocessImage = async (imageSrc) => {
  const SAM_URL = "https://35.236.172.236:5000/predictions/segmentation/";

  try {
    await obtainMask(imageSrc, SAM_URL);
  } catch (error) {
    console.log(error);
    alert("서버와 통신 중 오류가 발생했습니다.");
    // window.location.href = "/";
  }

  var obtainedMask = sessionStorage.getItem("mask");
  // console.log(`obtainedMask is ${obtainedMask}`);

  return obtainedMask;
};

const obtainMask = async (image, api_url) => {
  var b64_image = image.split(",")[1];
  // console.log(`obtainMask: b64_image is ${b64_image}`);
  var files = {
    image: b64_image, // b64-encoded input image
  };

  // console.log("trying to request in obtainMask");
  await fetch(api_url, {
    method: "POST",
    body: JSON.stringify(files),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    credentials: "omit",
  })
    .then(function (response) {
      // console.log(`I got the response of obtainMask`);
      return response.json();
    })
    .then(function (resp_dict) {
      // console.log(`obtainMask resp_dict is ${resp_dict}`);
      var b64_mask = resp_dict.b64_mask;
      // console.log(b64_mask);
      alert_error(resp_dict.message);
      const inferredMask = "data:image/jpeg;base64," + b64_mask;
      sessionStorage.setItem("mask", inferredMask);
    });
};

export const convertImage = async (imageSrc, mask, imageName) => {
  const SD_URL = "https://35.236.172.236:5000/predictions/inpainting/";

  try {
    await obtainImage(imageSrc, mask, imageName, SD_URL);
  } catch (error) {
    console.log(error);
    alert("서버와 통신 중 오류가 발생했습니다.");
    window.location.href = "/";
  }

  var convImage = sessionStorage.getItem("convertedImage");
  // console.log(`convertedImage is ${convImage}`);

  return convImage;
};

const obtainImage = async (image, mask, prompt, api_url) => {
  var b64_image = image.split(",")[1];
  var b64_mask = mask.split(",")[1];

  // console.log(`image: ${b64_image}`);
  // console.log(`mask: ${b64_mask}`);
  // console.log(`prompt: ${prompt}`);

  var files = {
    image: b64_image, // b64-encoded input image
    mask: b64_mask,
    prompt: prompt, // text prompt
  };

  // console.log("trying to request");
  await fetch(api_url, {
    method: "POST",
    body: JSON.stringify(files),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "omit",
  })
    .then(function (response) {
      // console.log(`I got the response`);
      return response.json();
    })
    .then(function (resp_dict) {
      // console.log(`resp_dict is ${resp_dict}`);
      var b64_inpainted = resp_dict.b64_inpainted;
      // console.log(`b64_inpainted is ${b64_inpainted}`);
      alert_error(resp_dict.message);
      const convertedImg = "data:image/jpeg;base64," + b64_inpainted;
      sessionStorage.setItem("convertedImage", convertedImg);
      sessionStorage.setItem("imagePrompt", prompt);
    });
};

const alert_error = (msg) => {
  if (msg === "ERR_HUMAN_NOT_DETECTED") {
    alert("YOLO: 사람을 감지하는 데 실패했습니다. 다른 이미지로 시도해주세요.");
    window.location.href = "/";
  }
  if (msg === "ERR_YOLO_UNKNOWN") {
    alert("YOLO: 알 수 없는 오류입니다. 다른 이미지로 시도해주세요.");
    window.location.href = "/";
  }
  if (msg === "ERR_SAM_UNKNOWN") {
    alert("SAM: 알 수 없는 오류입니다. 다른 이미지로 시도해주세요.");
    window.location.href = "/";
  }
  if (msg === "ERR_SD_UNKNOWN") {
    alert(
      "STABLE_DIFFUSION: 알 수 없는 오류입니다. 다른 이미지로 시도해주세요."
    );
    window.location.href = "/";
  }
};
