import React from 'react';

import { Checkbox } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
	const [totalAmount, setTotalAmount] = React.useState(0);
	const [totalItems, setTotalItems] = React.useState(0);
	const [modalOpen, setModalOpen] = React.useState(false);
	function updateTotalAmount() {
		const g = JSON.parse(localStorage.getItem('cart') || '[]');
		setTotalAmount(
			g.map((item) => item.price * item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0),
		);
		setTotalItems(g.map((item) => item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0));
	}
	React.useEffect(() => {
		const cartChangeHandler = () => {
			updateTotalAmount();
		};
		window.addEventListener('cartChange', cartChangeHandler);
		updateTotalAmount();
	}, []);

	return (
		<>
			<div className={styles.Header}>
				<div className={styles.blocktitle}>
					<Link to='/merchstore.frontend/'>
						<div className={styles.title}>
							<img
								className={styles.image}
								src={'https://na.yungleangear.com/cdn/shop/t/4/assets/logo.svg?v=83476718230062498121697746479'}
							/>{' '}
						</div>
					</Link>
				</div>
				<div className={styles.block2}>
					<div className={styles.halfblocklist}>
						<div className={styles.halfblockcontentup} onClick={() => setModalOpen(true)}>
							<div className={styles.marqueewrapper}>
								<span className={styles.marqueeitem}>get 10% for subscribe - new drop soon</span>
								<span className={styles.marqueeitem}>get 10% for subscribe - new drop soon</span>
								<span className={styles.marqueeitem}>get 10% for subscribe - new drop soon</span>
								<span className={styles.marqueeitem}>get 10% for subscribe - new drop soon</span>
								<span className={styles.marqueeitem}>get 10% for subscribe - new drop soon</span>
								<span className={styles.marqueeitem}>get 10% for subscribe - new drop soon</span>
							</div>
						</div>
					</div>
					<div className={styles.halfblocklist}>
						<div className={styles.halfblockcontent}>
							Pages:
							<ul className={styles.pageslist}>
								<Link to='/merchstore.frontend/'>
									<li>
										<div className={styles.pagetitle}>All items </div>
									</li>
								</Link>
								<Link to='/merchstore.frontend/contact'>
									<li>
										<div className={styles.pagetitle}>Contact </div>
									</li>
								</Link>
								<Link to='/merchstore.frontend/faqs'>
									<li>
										<div className={styles.pagetitle}>FAQs </div>
									</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>

				<div className={styles.block}>
					<Link to='/merchstore.frontend/cart'>
						<div className={styles.halfblock2}>
							<div className={styles.halfblockcontentBag}>
								<div className={styles.bag}>
									<div className={styles.bagTag}>Items</div>
									{`${totalItems}`}
								</div>
								<div className={styles.amount}>
									<div className={styles.amountTag}>Amount</div>
									{totalAmount < 1000 ? `$${totalAmount}.00` : `$${totalAmount}`}
								</div>
							</div>
						</div>

						<div className={styles.halfblockdiag}>
							<div className={styles.diag}></div>
						</div>
					</Link>
				</div>
			</div>
			<Modal open={Boolean(modalOpen)}>
				<div className={styles.modalscreen}>
					<div className={styles.modalblock}>
						<div className={styles.modalblockcontent}>
							<div className={styles.modaltitle}>
								Want to know about all the news and releases first? Subscribe to the newsletter and get a promocode for
								10% on your first order
							</div>
							<img className={styles.smileSvg} src={'https://www.svgrepo.com/show/71651/smile.svg'}></img>

							<input className={styles.custominput} placeholder='    Enter the email' />
							<div className={styles.checkboxes}>
								<div className={styles.checkboxblock}>
									<Checkbox required={true} />
									<div className={styles.modaldesc}>
										I agree that the data I entered will be stored and used by this site{' '}
									</div>
								</div>
								<div className={styles.checkboxblock}>
									<Checkbox required={true} />
									<div className={styles.modaldesc}>I confirm I will receive mailings from the platform</div>
								</div>
							</div>
							<div className={styles.custombutton} onClick={() => setModalOpen(false)}>
								Subscribe
							</div>
							<div className={styles.custombutton} onClick={() => setModalOpen(false)}>
								Close
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};
