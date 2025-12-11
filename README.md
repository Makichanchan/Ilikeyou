import { useState } from "react";
import { motion } from "framer-motion";

export default function ConfessionSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-6">
      {/* Background audio when notification is opened */}
      {open && (
        <audio autoPlay loop>
          <source src="/passenger-seat.mp3" type="audio/mpeg" />
        </audio>
      )}

      <div className="text-center">
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-800 p-6 rounded-2xl shadow-xl cursor-pointer max-w-md mx-auto"
            onClick={() => setOpen(true)}
          >
            <div className="flex items-center justify-center space-x-3">
              <img src="/dove.png" alt="dove" className="w-12 h-12" />
              <div className="text-left">
                <h1 className="text-xl font-semibold">Laptop Notification</h1>
                <p className="text-sm text-neutral-300">You received a new letter</p>
              </div>
            </div>
          </motion.div>
        )}

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-xl mx-auto bg-neutral-100 text-neutral-900 p-10 rounded-2xl shadow-2xl font-serif tracking-wide leading-relaxed border border-neutral-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <h1 className="text-3xl font-bold text-center mb-4">I Like You</h1>

            <p className="mb-4">
              I’ve been meaning to tell you something, and maybe this little letter will do a better
              job than I ever could with spoken words.
            </p>

            <p className="mb-4">
              Being around you feels calm. It feels warm. Like a soft place to rest when the world gets
              heavy. You make things brighter without even trying. And I find myself looking forward to
              every moment near you.
            </p>

            <p className="mb-4">
              I like you. More than I expected. More than I planned. And I hope—even a little—that you
              might feel something close to that too.
            </p>

            <p>
              No pressure. No expectations. Just honesty, written the way old letters used to be,
              carried gently by a dove.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
