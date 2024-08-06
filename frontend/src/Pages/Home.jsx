import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Games from "../Components/Games";
import FriendList from "../Components/FriendList";

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <HomeBanner />
     <div className="flex flex-row my-12">
     <Games/>
     <FriendList/>
     </div>
    </div>
  );
};

export default Home;
