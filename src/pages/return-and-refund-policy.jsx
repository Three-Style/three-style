import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const ReturnandRefundPolicy = () => {
    return (
        <>
            <HomeHeader />

            <main>
                <section className="section">
                    <div className="container">
                        <h2 className="h4 mb-4">Return and Refund Policy</h2>
                        <p>
                            At <strong>Your Company Name</strong>, customer satisfaction is our top priority. This Return and Refund Policy outlines the terms under which returns and refunds may be requested for purchases made through our website.
                        </p>

                        <h6 className="py-2">1. Eligibility for Returns</h6>
                        <p>
                            We accept returns only if the product received is damaged, defective, or incorrect. To be eligible for a return:
                            <ul>
                                <li>The item must be unused, unwashed, and in the same condition as received.</li>
                                <li>The original packaging, tags, and invoice must be included.</li>
                                <li>Return requests must be raised within a specified period (usually 7 days) from the date of delivery.</li>
                            </ul>
                        </p>

                        <h6 className="py-2">2. Non-Returnable Items</h6>
                        <p>
                            Certain types of items are not eligible for return, such as:
                            <ul>
                                <li>Items purchased on sale or with discount coupons.</li>
                                <li>Customized or made-to-order products.</li>
                                <li>Items marked as "final sale" or "non-returnable" at the time of purchase.</li>
                            </ul>
                        </p>

                        <h6 className="py-2">3. Return Process</h6>
                        <p>
                            To initiate a return, please contact our support team with your order ID, reason for return, and photographs of the product (if damaged/defective). Once approved, we will schedule a pickup or provide return instructions.
                        </p>

                        <h6 className="py-2">4. Refund Process</h6>
                        <p>
                            Refunds will be initiated after the returned product is received and inspected. If approved:
                            <ul>
                                <li>Prepaid orders will be refunded to the original payment method.</li>
                                <li>COD orders will be refunded via UPI or bank transfer, as requested by the customer.</li>
                                <li>Refunds may take 7–10 business days to reflect, depending on your bank or payment provider.</li>
                            </ul>
                        </p>

                        <h6 className="py-2">5. Exchange Policy</h6>
                        <p>
                            At this time, we do not offer direct product exchanges. You may return the item (if eligible) and place a new order for the desired item separately.
                        </p>

                        <h6 className="py-2">6. Cancellation Policy</h6>
                        <p>
                            Orders can only be canceled before they are shipped. Once dispatched, cancellation is not possible, but you may initiate a return (if eligible) after delivery.
                        </p>

                        <h6 className="py-2">7. Policy Updates</h6>
                        <p>
                            We reserve the right to modify or update this Return and Refund Policy at any time. Any changes will be posted on this page with an updated effective date.
                        </p>

                        <h6 className="py-2">8. Contact Us</h6>
                        <p className="m-0px">
                            If you have any questions about returns, refunds, or cancellations, please contact our support team:
                            <br />
                            <strong>Email:</strong> your-email@example.com
                            <br />
                            <strong>Company:</strong> Your Company Name
                        </p>
                    </div>
                </section>
            </main>


            <HomeFooter />
        </>
    )
}


export default ReturnandRefundPolicy;

