import { Layout } from "../../layouts/Layout";
import { Routes, Route } from "react-router-dom";

import { LockScreen } from "../LockScreen";
import { PasswordScreen } from "../PasswordScreen";
import { HomeScreen } from "../HomeScreen";

import { Calculator } from "../Apps/Calculator";

export function Phone() {
  return (
    <div
      className="w-[350px] h-[650px] rounded-[40px] border-solid border-[10px] border-black object-cover overflow-hidden"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/54/a4/40/54a44053eab293e65fd65f4024732507.jpg)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LockScreen />} key={1} />
          <Route path="/password" element={<PasswordScreen />} key={2} />
          <Route path="/home" element={<HomeScreen />} key={3} />

          {/* Apps */}
          <Route path="/:app/:calculator" element={<Calculator />} key={4} />
          {/* --- */}
        </Route>
      </Routes>
    </div>
  );
}
