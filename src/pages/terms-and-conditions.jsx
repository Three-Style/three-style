import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const TermsandConditions = () => {
    return (
        <>
            <HomeHeader />

            <main>
                <section className="section">
                    <div className="container">
                        <h2 className="h4 mb-4">Terms and Conditions</h2>
                        <p>
                            Welcome to <strong>Your Company Name</strong>. By accessing or using our website, you agree to be bound by the following Terms and Conditions. Please read them carefully before using our services.
                        </p>

                        <h6 className="py-2">1. Acceptance of Terms</h6>
                        <p>
                            By visiting our website and/or purchasing something from us, you agree to be bound by these Terms of Service, including any additional terms and policies referenced here or available by hyperlink. These Terms apply to all users of the site.
                        </p>

                        <h6 className="py-2">2. Changes to Terms</h6>
                        <p>
                            We reserve the right to update, modify, or replace any part of these Terms and Conditions at any time. It is your responsibility to check this page periodically for changes. Continued use of the website after changes are posted constitutes acceptance of those changes.
                        </p>

                        <h6 className="py-2">3. Use of the Website</h6>
                        <p>
                            You agree not to use our website for any unlawful or prohibited purpose. You must not transmit any viruses, worms, or any code of a destructive nature. Unauthorized use may result in termination of your access to our services.
                        </p>

                        <h6 className="py-2">4. Product Information</h6>
                        <p>
                            We strive to ensure that all product descriptions, images, pricing, and availability are accurate. However, we do not guarantee that all information is error-free. In case of any inaccuracies, we reserve the right to correct them without prior notice.
                        </p>

                        <h6 className="py-2">5. Order Acceptance</h6>
                        <p>
                            All orders placed through our website are subject to our acceptance. We reserve the right to cancel or refuse any order for any reason, including limitations on quantities, inaccuracies in product or pricing information, or issues identified by our fraud detection systems.
                        </p>

                        <h6 className="py-2">6. Pricing and Payments</h6>
                        <p>
                            All prices listed are in INR (₹) and are subject to change without notice. We accept payments via various secure methods. By submitting payment information, you represent and warrant that you have the legal right to use the payment method.
                        </p>

                        <h6 className="py-2">7. Intellectual Property</h6>
                        <p>
                            All content on our website—including text, graphics, logos, images, and software—is the property of <strong>Your Company Name</strong> or its content suppliers and is protected by copyright and trademark laws. Unauthorized use is strictly prohibited.
                        </p>

                        <h6 className="py-2">8. Limitation of Liability</h6>
                        <p>
                            We are not liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website or products purchased from us. Your use of our website is at your own risk.
                        </p>

                        <h6 className="py-2">9. Governing Law</h6>
                        <p>
                            These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Surat, Gujarat.
                        </p>

                        <h6 className="py-2">10. Contact Information</h6>
                        <p className="m-0px">
                            If you have any questions about these Terms and Conditions, please contact us:
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


export default TermsandConditions;

