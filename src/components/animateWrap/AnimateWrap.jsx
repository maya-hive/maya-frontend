import { motion } from 'framer-motion';

export const AnimateWrap = ({ children }) => (
	<motion.div
		initial={{ opacity: 0, y: '20px' }}
		animate={{ opacity: 1, y: '0px' }}
		transition={{ ease: 'easeInOut' }}
		exit={{ opacity: 0 }}>
		{children}
	</motion.div>
);
