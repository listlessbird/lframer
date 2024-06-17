"use client";

import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion, AnimatePresence } from "framer-motion";

export default function SharedLayout() {
  const [activeGame, setActiveGame] = useState<any>(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event: any) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {activeGame ? (
        <AnimatePresence initial={false}>
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <div className="active-game">
            <motion.div
              className="inner"
              ref={ref}
              style={{ borderRadius: 12 }}
              layoutId={`game-${activeGame.title}`}
            >
              <div className="header">
                <motion.img
                  height={56}
                  width={56}
                  alt="Game"
                  src={activeGame.image}
                  layoutId={`game-${activeGame.image}`}
                  style={{ borderRadius: 12 }}
                />
                <div className="header-inner">
                  <div className="content-wrapper">
                    <motion.h2
                      className="game-title"
                      layoutId={`game-header-${activeGame.title}`}
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      className="game-description"
                      layoutId={`game-c-${activeGame.description}`}
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    className="button"
                    layoutId={`game-btn-${activeGame.title}`}
                  >
                    Get
                  </motion.button>
                </div>
              </div>
              <motion.p
                className="long-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {activeGame.longDescription}
              </motion.p>
            </motion.div>
          </div>
        </AnimatePresence>
      ) : null}
      <ul className="list">
        {GAMES.map((game) => (
          <motion.li
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            layoutId={`game-${game.title}`}
          >
            <motion.img
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              layoutId={`game-${game.image}`}
              style={{ borderRadius: 12 }}
            />
            <div className="game-wrapper">
              <div className="content-wrapper">
                <motion.h2
                  className="game-title"
                  layoutId={`game-header-${game.title}`}
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  className="game-description"
                  layoutId={`game-c-${game.description}`}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                className="button"
                layoutId={`game-btn-${game.title}`}
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
