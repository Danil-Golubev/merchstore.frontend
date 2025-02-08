import React from 'react';

import styles from './Faqs.module.scss';

export const Faqs = () => (
	<>
		<div className={styles.container}>
			<div className={styles.diagBlock}>
				<div className={styles.diag}></div>
			</div>
			<div className={styles.infoBlock}>
				<div className={styles.textinfo}>FAQs</div>
				<div className={styles.textinfo}>PRODUCT INFORMATION</div>
				<div className={styles.textinfoquestion}>Are these shirts genuine? </div>
				<div className={styles.textinfo}>
					Yes, we are an official merchandise supplier for all of the artists represented on our website.
				</div>
				<div className={styles.textinfoquestion}>What are the actual sizes for your shirts? </div>
				<div className={styles.textinfo}>
					We use a variety of shirts from different manufactures, so the fit of each shirt will vary by style.
				</div>
				<div className={styles.textinfo}>Please refer to the size chart of each individual item.</div>
				<div className={styles.textinfo}>RETURN POLICY</div>
				<div className={styles.textinfo}>
					The item must be in the same condition as when you received it. We do not accept items that have been worn,
					altered or washed. Refunds will be credited to the credit card used to purchase the item, once it has arrived
					in our warehouse.
				</div>
				<div className={styles.textinfo}>If you require any help with your return, contact us at @ownantwerp</div>
				<div className={styles.textinfo}>SHIPPING</div>
				<div className={styles.textinfo}>
					All orders are shipped from Vänersborg, Sweden via FedEx or Postnord. Shipping rates are determined by weight
					and destination
				</div>
				<div className={styles.textinfo}>
					To find out the cost of shipping for your order, add the items you want into your shopping cart and proceed to
					checkout until you’ve selected your shipping method. The cost of shipping will automatically update in your
					order total before you need to enter your payment method information.
				</div>
				<div className={styles.textinfo}>
					Once your order has been shipped, you will receive an email confirmation of your shipping details and tracking
					number.
				</div>
				<div className={styles.textinfo}>
					For all destinations outside of the EU, customers may face import and duty taxes. These vary from country to
					country and Merchworld has no control over them. In the event that you need to pay import and duty taxes, you
					will be contacted directly by the shipping service and the order will not be released until you have paid.
					Please contact your local customs office for further details of charges.
				</div>
				<div className={styles.textinfo}>
					In the case that FedEx/Postnord is unable to deliver a package due to an incorrect address entered by the
					customer, multiple failed attempts to reach the customer by phone number (required at purchase) at point of
					delivery or otherwise, Merchworld is not responsible for payment of return shipping costs levied by the
					courier.
				</div>
				<div className={styles.textinfo}>
					Similarly, Merchworld is not responsible for the payment of re-shipping merchandise to the customer. In cases
					such as these, the customer is responsible for all shipping costs associated with returned packages due to
					failed delivery.
				</div>
				<div className={styles.textinfo}>
					Merchworld is not responsible for unexpected shipping delays caused by circumstances such as severe weather or
					natural disasters. Similarly, we are not responsible for unexpected shipping delays caused by circumstances
					related to the courier itself, such as clearance delays. Similarly, Merchworld is not responsible for theft of
					packages.
				</div>
				<div className={styles.textinfo}>
					In cases such as these, please contact your courier with any inquiries about the status of your package.
				</div>
				<div className={styles.textinfo}>GENERAL QUESTIONS</div>
				<div className={styles.textinfoquestion}>Why is there two different shops at yungleangear.com?</div>
				<div className={styles.textinfo}>
					Based on customer feedback, yungleangear.com now runs through two different production and fulfilment centers
					(East Coast US and Sweden) in order to provide as affordable and efficient shipping as possible world wide;
					please choose your region (North America or Rest Of World) at the landing page.
				</div>
				<div className={styles.textinfoquestion}>Why do the products differ between the NA and ROW shops?</div>
				<div className={styles.textinfo}>
					Our suppliers carry different brands of garments in different territories of the world, and because Yung Lean
					& Sad Boys merchandise is made using high-end + sustainable and/or special treatment garments it is not
					possible to make identical products for all territories.
				</div>
				<div className={styles.textinfoquestion}>If I order an item online, is it guaranteed in stock?</div>
				<div className={styles.textinfo}>
					No, there are rare occasions that an item posted on the website as “in-stock” actually has no inventory
					available.
				</div>
				<div className={styles.textinfoquestion}>Do the shirts displayed match the actual shirt?</div>
				<div className={styles.textinfo}>
					Some colors on your computer screen may not exactly match the actual print on the shirt.
				</div>
				<div className={styles.textinfo}>INFORMATION</div>
				<div className={styles.textinfo}>
					https://danil-golubev.github.io/merchstore.frontend is operated by ownantwerp. All rights reserved.
				</div>
			</div>
		</div>
	</>
);
