import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const showToast = useShowToast();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    //console.log(file);

    if (file && file.size > 1000000) {
      showToast("File size Limit", "File size is bigger than 1Mb", "error");
      setImgUrl(null);
      return;
    }

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgUrl(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      showToast("Invalid file type", "Please Select an Image File", "error");
      setImgUrl(null);
      return;
    }
  };
  //   console.log(imgUrl);
  return { handleImageChange, imgUrl, setImgUrl };
};

export default usePreviewImg;
