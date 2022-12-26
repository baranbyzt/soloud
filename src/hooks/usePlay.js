import { useNavigate } from "react-router-dom";

const usePlay = () => {
  const navigate = useNavigate();

  function playVideo(val) {
    navigate("/detail", { state: val });
  }

  return { playVideo };
};

export default usePlay;
