import React, { useState } from "react";
import Menu from "../../components/organisms/menu";
import Recent from "../../components/organisms/recent";

import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard";
import Detail from "../detail";
import Favorites from "../favorites";
import Trends from "../trends";
import MusicMap from "../music-map";
import Logo from "../../components/molecules/logo";
import Grid from "../../components/atoms/grid";

const menuData = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "FiMonitor",
    path: "/dashboard",
  },
  {
    id: "trends",
    label: "Trends",
    icon: "AiOutlinePieChart",
    path: "/trends",
  },
  {
    id: "musicMap",
    label: "Music Map",
    icon: "FiMapPin",
    path: "/music-map",
  },
  {
    id: "favorites",
    label: "Favorites",
    icon: "AiOutlineHeart",
    path: "/favorites",
  },
];

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(menuData[0].id);

  return (
    <>
      <Grid direction="row">
        <Grid width="240px">
          <Logo size="md" />
          <Menu
            data={menuData}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          <Recent />
        </Grid>
        <Grid>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/music-map" element={<MusicMap />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
