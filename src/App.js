import { useState } from "react";
import { motion } from "framer-motion";

export default function ConfessionSite() {
  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const spotifyURL =
    "https://open.spotify.com/track/7nbIGbDitZIYoMrMsXunAu?si=3e9019eec9cb4e85";

  const handleSpotifyClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      window.open(spotifyURL, "_blank");
    }, 800); // matches fade out duration
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background audio when notification is opened */}
      {open && (
        <audio autoPlay loop>
          <source src="/gitara-parokya.mp3" type="audio/mpeg" />
        </audio>
      )}

      {/* Confetti / Heart Particles */}
      {fadeOut && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-pink-500 rounded-full absolute"
              style={{ left: `${Math.random() * 100}%`, top: `0%` }}
              animate={{ y: "120vh", opacity: [1, 0] }}
              transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
            ></motion.div>
          ))}
        </div>
      )}

      <div className="text-center">
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-5 right-5 bg-neutral-800 p-4 rounded-xl shadow-2xl cursor-pointer w-80 border border-neutral-700"
            onClick={() => setOpen(true)}
          >
            <div className="flex items-center space-x-3">
              <motion.img
                src="/dove.png"
                alt="dove"
                className="w-12 h-12"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <div className="text-left">
                <h1 className="text-xl font-semibold">
                  New Laptop Notification
                </h1>
                <p className="text-sm text-neutral-300">
                  A dove delivered a letter for you
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={fadeOut ? { opacity: 0 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-xl mx-auto text-neutral-900 p-10 rounded-2xl shadow-2xl font-serif tracking-wide leading-relaxed border border-neutral-300"
            style={{
              backgroundImage: "url(/paper-texture.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              fontFamily: "Georgia, serif",
            }}
          >
            {/* Wax Seal Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-20 h-20 mx-auto mb-6"
              style={{
                backgroundImage: "url(/wax-seal.png)",
                backgroundSize: "cover",
              }}
            ></motion.div>

            {/* Typewriter Sound */}
            <audio autoPlay>
              <source src="/typewriter.mp3" type="audio/mpeg" />
            </audio>

            {/* Glowing Heart */}
            <motion.div
              className="w-16 h-16 mx-auto mb-4"
              style={{
                backgroundImage: "url(/heart.png)",
                backgroundSize: "cover",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>

            <h1 className="text-3xl font-bold text-center mb-4">I Like You</h1>

            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              I’ve been meaning to tell you something, and maybe this little
              letter will do a better job than I ever could with spoken words.
            </motion.p>

            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Being around you feels calm. It feels warm. Like a soft place to
              rest when the world gets heavy. You make things brighter without
              even trying. And I find myself looking forward to every moment
              near you.
            </motion.p>

            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              I like you. More than I expected. More than I planned. And I
              hope—even a little—that you might feel something close to that
              too.
            </motion.p>

            <p className="mb-4">
              No pressure. No expectations. Just honesty, written the way old
              letters used to be, carried gently by a dove.
            </p>

            {/* Spotify Button with fade-out animation */}
            <motion.button
              onClick={handleSpotifyClick}
              className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg text-lg font-semibold hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Listen on Spotify
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
