import { ROUTER } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/users/ProfilePage";
import HomePage from "./pages/users/HomePage";
import MasterLayout from "./pages/users/theme/masterLayout";

const HandleRouter = () => {
  const routers = [
    {
      path: ROUTER.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTER.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {routers.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

function RouterCustom() {
  return HandleRouter();
}

export default RouterCustom;
