import styles from './ItemContainerSkeleton.module.scss';

export const ItemContainerSkeleton = () => (
	<>
		<div className={styles.modal}>
			{' '}
			<div className={styles.title}>
				please stand by, project hosted on the free service so first build can take one minute
			</div>
		</div>
		<div className={styles.container}>
			<div>
				<div className={styles.loader} />
			</div>
		</div>
	</>
);
