import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { game } from "../Redux/Slice/GameData";
import { useNavigate } from "react-router-dom";
const Games = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(game());
  }, []);

  const GameData = useSelector((state) => state.game.data);

  if (GameData !== null) {
    return (
      <section className=" w-9/12">
        <h1>Games</h1>
        <div className="flex gap-6 my-4 flex-wrap ">
          {GameData.map((game) => {
            return (
              <div
                onClick={() => navigate(`/properties/${game.id}`)}
                className="w-48 h-[340px]  rounded-t-2xl overflow-hidden"
              >
                <img
                  src={`images/cover/${game.cover}`}
                  className="h-60 w-full object-cover ov rounded-2xl"
                />
                <p className="font-semibold px-2">{game.type}</p>

                <h1 className="font-bold text-wrap px-2 ">{game.name}</h1>
                <div className="flex gap-5 px-2">
                  <span className="font-bold text-stone-800 line-through">
                    ${game.price}
                  </span>
                  <p className="font-bold">${game.bonusPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Games;
