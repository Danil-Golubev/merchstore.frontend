import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './Item.module.scss';
import { fetchGetOne } from '../../api/getItem';

export const Product = () => {
	const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
	const [items, setItems] = useState({});
	const [selectedSize, setSelectedSize] = useState(null);
	const [cart, setCart] = useState(cartFromLocalStorage);
	const { id } = useParams();
	function addToCart() {
		const item = {
			_id: items._id,
			title: items.title,
			selectedSize: selectedSize ? selectedSize : 'o.s.',
			price: items.price,
			imageUrl: items.imageUrl,
			count: 1,
		};
		const targetid = item._id;
		const targetSize = item.selectedSize;
		const targetItem = cart.find((obj) => obj._id === targetid && obj.selectedSize === targetSize);
		if (targetItem != undefined) {
			cart[cart.indexOf(targetItem)].count += 1;
		} else {
			cart.push(item);
		}
		setCart(cart);
		localStorage.setItem('cart', JSON.stringify(cart));
		const cartChangeEvent = new Event('cartChange');
		window.dispatchEvent(cartChangeEvent);
	}

	const handleItem = async () => {
		const data = await fetchGetOne(id);
		setItems(data);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchGetOne(id);
				setItems(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [id]);
	if (items == {}) {
		return <div>loading</div>;
	}

	return (
		<>
			<div className={styles.container}>
				<motion.div animate={{ opacity: 1 }} className={styles.bighalfblock} initial={{ opacity: 0 }}>
					<LazyLoadImage className={styles.image} effect='blur' height='auto' src={`${items.imageUrl}`} width='100%' />
				</motion.div>
				<div className={styles.bighalfblockinfo}>
					<div className={styles.infocontainer}>
						<div className={styles.contentcontainer}>
							<ul className={styles.defaultul}>
								<li className={styles.defaultli}>
									<div className={styles.title}>{items.title}</div>
								</li>
								<li className={styles.defaultli}>
									<div className={styles.description}>{items.description}</div>
								</li>
								<div className={styles.pricebox}>
									<div className={styles.price}>{items.price}$</div>
									<svg
										className={styles.svg}
										height='73px'
										preserveAspectRatio='none'
										version='1.1'
										viewBox='0 0 78 73'
										width='78px'
										xmlns='http://www.w3.org/2000/svg'
										// eslint-disable-next-line react/no-unknown-property
									>
										<g fill='none' fillRule='evenodd' id='Page-1' stroke='none' strokeWidth='1'>
											<g id='02b-product' stroke='#000000' transform='translate(-1293.000000, -210.000000)'>
												<polygon
													id='Star'
													points='1332 270 1308.48859 282.36068 1312.97887 256.18034 1293.95774 237.63932 1320.24429 233.81966 1332 210 1343.75571 233.81966 1370.04226 237.63932 1351.02113 256.18034 1355.51141 282.36068'
													vectorEffect='non-scaling-stroke'
												></polygon>
											</g>
										</g>
									</svg>
								</div>

								<li className={styles.defaultli}>
									<div className={styles.sizeContainer}>
										{items.sizes?.map((item) =>
											item.count > 0 ? (
												// eslint-disable-next-line react/jsx-key
												<div
													className={`${styles.sizeBlock} ${selectedSize === item.sizeName ? styles.selected : ''}`}
													onClick={() => setSelectedSize(item.sizeName)}
												>
													{item.sizeName}
												</div>
											) : (
												// eslint-disable-next-line react/jsx-key
												<div className={styles.sizeBlockSold}>{item.sizeName}</div>
											),
										)}
									</div>
								</li>

								<li className={styles.defaultli}>
									{selectedSize != null || items.type == 'other' ? (
										<div className={styles.buttonOrder} onClick={() => addToCart()}>
											Add to cart
										</div>
									) : (
										<>
											<div className={styles.buttonOrder}>Add to cart</div>
										</>
									)}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{items.additionalImages?.map((item) => (
				<div className={styles.additionalImageDiv} key={item._index}>
					<img className={styles.additionalImage} src={`${item}`} />
				</div>
			))}
		</>
	);
};
