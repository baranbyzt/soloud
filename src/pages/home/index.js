import React, { useState } from "react";
import Menu from "../../components/organisms/menu";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard";
import Detail from "../detail";
import Favorites from "../favorites";
import Trends from "../trends";
import MusicMap from "../music-map";

import Grid from "../../components/atoms/grid";

const menuData = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "AiOutlinePieChart",
    path: "/dashboard",
  },
  {
    id: "favorites",
    label: "Favorites",
    icon: "AiOutlinePieChart",
    path: "/favorites",
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
    icon: "AiOutlinePieChart",
    path: "/music-map",
  },
];

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(menuData[0].id);

  return (
    <div style={{ backgroundColor: "#171929" }}>
      <Grid direction="row">
        <Grid width="240px">
          <Menu
            data={menuData}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
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
    </div>
  );
};

export default Home;
