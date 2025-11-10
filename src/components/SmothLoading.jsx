import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -20 }
};
function SmothLoading({children}) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
        
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          transition={{ type: 'tween', duration: 0.3 }}
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
  )
}

export default SmothLoading