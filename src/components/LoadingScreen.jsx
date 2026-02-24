import { motion, AnimatePresence } from 'framer-motion'

/**
 * Loading screen with gradient logo-style animation
 * Fades out when loading completes
 */
export default function LoadingScreen({ isLoading, onComplete }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={onComplete}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="h-16 w-16 rounded-2xl border-2 border-[#00d4ff] bg-gradient-to-br from-[#00d4ff]/20 to-[#a855f7]/20"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0,212,255,0.4)',
                  '0 0 40px rgba(168,85,247,0.5)',
                  '0 0 20px rgba(0,212,255,0.4)',
                ],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="text-gradient text-xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Abhi Yazhini P
            </motion.span>
            <motion.div
              className="h-1 w-32 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7]"
                animate={{ x: ['0%', '200%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
