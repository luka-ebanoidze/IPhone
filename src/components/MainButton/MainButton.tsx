import { useParams, useNavigate } from "react-router-dom";


export function MainButton() {

  let params = useParams();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (params.app) {
          navigate("/home");
        }
      }}
      className="w-2/5 h-[5px] bg-white rounded-full mt-5 cursor-pointer"
    ></div>
  );
}
