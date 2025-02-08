import React, { useEffect } from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';

export const Cart = () => {
	const [storedObjects, setStoredOjects] = React.useState(JSON.parse(localStorage.getItem('cart') || '[]'));
	const [cart, setCart] = React.useState();
	const cartChangeEvent = new Event('cartChange');
	useEffect(() => {
		setStoredOjects(JSON.parse(localStorage.getItem('cart') || '[]'));
	}, [cart]);

	const totalPrice = storedObjects
		.map((item) => item.price * item.count)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	function updateItemInLocalCacheMinus(id, size) {
		// Находим индекс нужного объекта
		const index = storedObjects.findIndex((item) => item._id === id && item.selectedSize === size);

		if (storedObjects[index].count > 1) {
			// Уменьшаем count на 1
			storedObjects[index].count -= 1;
		} else {
			// Если count равен 1, удаляем объект из массива
			storedObjects.splice(index, 1);
		}

		// Сохраняем обновленные данные обратно в localStorage
		localStorage.setItem('cart', JSON.stringify(storedObjects));

		setCart(storedObjects);

		window.dispatchEvent(cartChangeEvent);
	}
	function updateItemInLocalCachePlus(id, size) {
		// Находим индекс нужного объекта
		const index = storedObjects.findIndex((item) => item._id === id && item.selectedSize === size);

		storedObjects[index].count += 1;
		// Сохраняем обновленные данные обратно в localStorage
		localStorage.setItem('cart', JSON.stringify(storedObjects));

		setCart(storedObjects);
		window.dispatchEvent(cartChangeEvent);
	}

	if (!storedObjects.length) {
		return (
			<div className={styles.clearblock}>
				<div className={styles.clearcontent}>
					<img className={styles.smileSvg} src={'https://www.svgrepo.com/show/85894/straight.svg'}></img>
					<div className={styles.cleartitle}>It seems your cart is empty</div>
					<div className={styles.cleartitle}>Add something if you want to spend some money</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className={styles.content}>
				<div className={styles.leftBlock}>
					{storedObjects?.map((item) => (
						// eslint-disable-next-line react/jsx-key
						<div className={styles.oneBlock}>
							<img className={styles.imageBlock} src={item.imageUrl}></img>

							<div className={styles.title}>
								{item.title}
								{`-${item.selectedSize}`}
							</div>

							<div className={styles.count}>
								<Button
									className={styles.customButton}
									onClick={() => updateItemInLocalCacheMinus(item._id, item.selectedSize)}
								>
									{'-'}
								</Button>
								<div className={styles.customButtonCount}>{item.count}</div>
								<Button
									className={styles.customButton}
									onClick={() => updateItemInLocalCachePlus(item._id, item.selectedSize)}
								>
									{'+'}
								</Button>
								<div></div>
							</div>
							<div className={styles.price}>${item.price * item.count}.00 </div>
						</div>
					))}
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.rightBlockContent}>
						<img className={styles.smileSvg} src={'https://www.svgrepo.com/show/71651/smile.svg'}></img>
						<div className={styles.infoBox}>
							What to do if you receive a damaged merchandise item and all information about refund policy located on
							our{' '}
							<Link to='/merchstore.frontend/faqs'>
								<a className={styles.astyle}>F.A.Q</a>
							</Link>{' '}
							page page, visit it to get a advanced information about our order political.
						</div>
						<div className={styles.totalLine}>
							<div className={styles.totalMainTitle}>Your order:</div>
							<div className={styles.infoBlock}>
								<div className={styles.totalTitle}>Items price</div>
								<div className={styles.totalInfo}>${totalPrice}</div>
							</div>
							<a>{'==>'}</a>
							<div className={styles.infoBlock}>
								<div className={styles.totalTitle}>Shipping price</div>
								<div className={styles.totalInfo}>$35</div>
							</div>
							<a>{'==>'}</a>
							<div className={styles.infoBlock}>
								<div className={styles.totalTitle}>Total price</div>
								<div className={styles.totalInfo}>${totalPrice + 35}</div>
							</div>
						</div>
						<Button className={styles.purchaseButton}>Checkout and spend ${totalPrice + 35}</Button>
					</div>
				</div>
			</div>
		</>
	);
};
