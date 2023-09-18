import { Layout } from "../../layouts/Layout";
import { Routes, Route } from "react-router-dom";

import { LockScreen } from "../LockScreen";

export function Phone() {
  return (
    <div
      className="w-[350px] h-[650px] rounded-[40px] border-solid border-[10px] border-black object-cover"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/54/a4/40/54a44053eab293e65fd65f4024732507.jpg)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat"
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LockScreen />} key={1} />
        </Route>
      </Routes>
    </div>
  );
}
