import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-black h-screen flex flex-col justify-center bg-cover items-center text-center text-white px-4">
      <img className='h-screen w-full' src="src/assets/wallpaperRickMorty.jpg" alt="imagem rick" />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-9xl font-bold mb-6"
      >
        Mundo Rick
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl font-bold max-w-2xl"
      >
        O cientista maluco e seu neto burro.
      </motion.p>
    </section>
  );
}