import { Spin } from "antd";
import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const [isLoading, setIsLoading] = useState(false); // Simulate loading state
  const [privacyPolicy, setPrivacyPolicy] = useState(""); // State for Privacy Policy content

  // Demo Privacy Policy content
  const demoPrivacyPolicy = `
    <div className="prose max-w-none">
      <h2>Privacy Policy</h2>
      <p>Effective Date: July 25, 2025</p>
      <p>
        At Our Company, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We may collect personal information such as your name, email address, and contact details when you interact with our website or services.
      </p>
      <h3>How We Use Your Information</h3>
      <ul>
        <li>To provide and improve our services</li>
        <li>To communicate with you about updates and promotions</li>
        <li>To ensure the security of our platform</li>
      </ul>
      <h3>Data Sharing</h3>
      <p>
        We do not sell your personal information. We may share it with trusted third-party service providers to perform functions on our behalf, such as payment processing or analytics.
      </p>
      <h3>Your Rights</h3>
      <p>
        You have the right to access, update, or delete your personal information. Contact us at privacy@ourcompany.com for assistance.
      </p>
    </div>
  `;

  // Simulate fetching demo content on component mount
  useEffect(() => {
    setIsLoading(true);
    // Simulate API delay
    const timer = setTimeout(() => {
      setPrivacyPolicy(demoPrivacyPolicy);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [demoPrivacyPolicy]);

  if (isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <section className="w-full h-full px-5">
      {/* Header with navigation and edit button */}
      <div className="flex justify-between items-center py-4 ">
        <div className="flex gap-2 items-center">
          {/* Back button to settings page */}
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        </div>
        {/* Edit button linking to edit page */}
        <Link to={"/settings/edit-privacy-policy"}>
          <button
            className="px-8 py-3 flex justify-between items-center gap-2 bg-primary text-white rounded-lg"
            type="submit"
          >
            <TbEdit className="size-5" />
            <span>Edit</span>
          </button>
        </Link>
      </div>
      {/* Render demo Privacy Policy content */}
      <div
        className="pb-9"
        dangerouslySetInnerHTML={{ __html: privacyPolicy }}
      ></div>
    </section>
  );
};

export default PrivacyPolicy;
