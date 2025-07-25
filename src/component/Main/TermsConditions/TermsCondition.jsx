import { Spin } from "antd";
import { IoChevronBack } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TermsCondition = () => {
  const [isLoading, setIsLoading] = useState(false); // Simulate loading state
  const [termsConditions, setTermsConditions] = useState(""); // State for Terms and Conditions content

  // Demo Terms and Conditions content
  const demoTermsConditions = `
    <div className="prose max-w-none">
      <h2>Terms and Conditions</h2>
      <p>Effective Date: July 25, 2025</p>
      <p>
        Welcome to Our Company. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
      </p>
      <h3>1. Use of Services</h3>
      <p>
        You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the services.
      </p>
      <h3>2. Intellectual Property</h3>
      <p>
        All content, trademarks, and data on our website, including text, graphics, and software, are the property of Our Company or its licensors and are protected by copyright and other laws.
      </p>
      <h3>3. Limitation of Liability</h3>
      <p>
        Our Company is not liable for any damages arising from the use or inability to use our services, including but not limited to direct, indirect, or consequential damages.
      </p>
      <h3>4. Changes to Terms</h3>
      <p>
        We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website. Your continued use constitutes acceptance of the updated terms.
      </p>
      <h3>5. Contact Us</h3>
      <p>
        For questions about these Terms and Conditions, please contact us at terms@ourcompany.com.
      </p>
    </div>
  `;

  // Simulate fetching demo content on component mount
  useEffect(() => {
    setIsLoading(true);
    // Simulate API delay
    const timer = setTimeout(() => {
      setTermsConditions(demoTermsConditions);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [demoTermsConditions]);

  if (isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <section className="w-full h-full min-h-screen px-5 pb-8">
      {/* Header with navigation and edit button */}
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2 items-center">
          {/* Back button to settings page */}
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Terms & Conditions</h1>
        </div>
        {/* Edit button linking to edit page */}
        <Link to={"/settings/edit-terms-conditions"}>
          <button
            className="px-8 py-3 flex justify-between items-center gap-2 bg-primary text-white rounded-lg"
            type="submit"
          >
            <TbEdit className="size-5" />
            <span>Edit</span>
          </button>
        </Link>
      </div>
      {/* Render demo Terms and Conditions content */}
      <div dangerouslySetInnerHTML={{ __html: termsConditions }}></div>
    </section>
  );
};

export default TermsCondition;
