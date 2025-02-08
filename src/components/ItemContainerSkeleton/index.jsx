import styles from './ItemContainerSkeleton.module.scss';

export const ItemContainerSkeleton = () => (
	<>
		<div className={styles.modal}>
			{' '}
			<div className={styles.title}>
				Пожалуйста подождите, проект не является коммерческим и размещен на бесплатном хостинге.
				<br /> Первичная загрузка может занять до 10 секунд, потом все будет ок =)
			</div>
		</div>
		<div className={styles.container}>
			<div>
				<div className={styles.loader} />
			</div>
		</div>
	</>
);
