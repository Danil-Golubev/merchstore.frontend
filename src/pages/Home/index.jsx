import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.module.scss';
import { ItemContainer } from '../../components/ItemContainer';
import { ItemContainerSkeleton } from '../../components/ItemContainerSkeleton';
import { fetchGetItems } from '../../redux/slices/itemsSlice';

export const Home = () => {
	const { items: items } = useSelector((state) => state.items);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!items.length) {
			dispatch(fetchGetItems());
		}
	}, [dispatch, items.length]);

	if (!items.length) {
		return (
			<>
				<div className={styles.container}>
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
				</div>
			</>
		);
	}
	return (
		<>
			<div className={styles.container}>
				{items.map((item) => (
					<ItemContainer
						id={item._id}
						imageUrl={item.imageUrl}
						key={item._id}
						price={'$' + item.price + '.00'}
						title={item.title}
					/>
				))}
			</div>
		</>
	);
};
