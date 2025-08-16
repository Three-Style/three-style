import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const ReturnPolicy = () => {
    return (
        <>
            <HomeHeader />

            <main>
                <section class="section">
                    <div class="container">
                        <h2 class="h4 mb-4">Return Policy</h2>
                        <p>
                            At <strong>Your Company Name</strong>, we strive to ensure you are happy with your purchase. If you receive a product that is damaged, defective, or incorrect, you may request a return under the conditions outlined below.
                        </p>

                        <h6 class="py-2">1. Eligibility for Returns</h6>
                        <ul>
                            <li>The item must be unused, unwashed, and in its original condition.</li>
                            <li>All original tags, packaging, and invoice must be included.</li>
                            <li>Return requests must be initiated within 7 days of delivery.</li>
                        </ul>

                        <h6 class="py-2">2. Non-Returnable Items</h6>
                        <ul>
                            <li>Products purchased on sale or with discount coupons.</li>
                            <li>Customized, personalized, or made-to-order items.</li>
                            <li>Items marked as “Final Sale” or “Non-Returnable.”</li>
                        </ul>

                        <h6 class="py-2">3. Return Process</h6>
                        <p>
                            To start a return, please contact our customer support team with your Order ID, reason for return, and (if applicable) images of the product. Once approved, we will schedule a pickup or share return instructions.
                        </p>

                        <h6 class="py-2">4. Exchange Policy</h6>
                        <p>
                            We do not offer direct product exchanges. If you wish to get a different item, please return the product (if eligible) and place a new order separately.
                        </p>

                        <h6 class="py-2">5. Cancellation of Orders</h6>
                        <p>
                            Orders can only be canceled before dispatch. Once shipped, cancellation is not possible. However, you may request a return after delivery if the item qualifies under our return conditions.
                        </p>

                        <h6 class="py-2">6. Contact Us</h6>
                        <p class="m-0px">
                            For questions regarding returns, please contact our support team:<br />
                            <strong>Email:</strong> support@example.com <br />
                            <strong>Phone:</strong> +91-XXXXXXXXXX <br />
                            <strong>Company:</strong> Your Company Name
                        </p>
                    </div>
                </section>
            </main>




            <HomeFooter />
        </>
    )
}


export default ReturnPolicy;

