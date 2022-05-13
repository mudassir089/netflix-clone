import React from "react";
import Movienavbar from "./movienavbar";
import Moviehomescreen from "./moviehomescreen";
import Tvshows from "./tvshows";
import Netflixoriginals from "./netflixoriginals";
import { Route, Switch } from "react-router";
import Moviedetailrender from "./moviedetailrender";
import Privateroute from "./Privateroute";
import Profile from "../pages/profile";
import Search from "../pages/search";

const Netflix = () => {
  return (
    <>
      <Movienavbar />
      <Switch>
        <Privateroute
          path="/movies"
          exact
          component={Moviehomescreen}
        ></Privateroute>
        <Privateroute path="/movies/tvshows" component={Tvshows}></Privateroute>
        <Privateroute
          path="/movies/Originals"
          component={Netflixoriginals}
        ></Privateroute>
        <Privateroute
          path="/movies/detail/:id"
          component={Moviedetailrender}
        ></Privateroute>
        <Privateroute path="/movies/search" component={Search}></Privateroute>
      </Switch>
    </>
  );
};

export default Netflix;
