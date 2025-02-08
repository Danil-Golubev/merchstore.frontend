// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './ItemContainer.module.scss';
export const ItemContainer = ({ imageUrl, title, price, id }) => (
	<>
		<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className={styles.container}>
			<Link to={`/merchstore.frontend/item/${id}/`}>
				<img alt={title} className={styles.imageUrl} src={imageUrl} />
				<div className={styles.textBlock}>
					<div className={styles.mainBlock}>
						<div className={styles.title}>{title}</div>
					</div>
					<div className={styles.block}>
						<div className={styles.price}>{price}</div>
					</div>
				</div>
			</Link>
		</motion.div>
	</>
);
