import { Form, Spin } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EditPrivacyPolicy = () => {
  const [form] = Form.useForm();
  const editor = useRef(null);
  const [content, setContent] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const [isMutating, setIsMutating] = useState(false); 
  const navigate = useNavigate();

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
      setContent(demoPrivacyPolicy);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [demoPrivacyPolicy]);

  // Simulate updating Privacy Policy content
  const handleSubmit = async () => {
    try {
      setIsMutating(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Privacy Policy updated successfully.");
      navigate("/settings");
    } catch (error) {
      toast.error("Failed to update Privacy Policy.");
    } finally {
      setIsMutating(false);
    }
  };

  return (
    <section className="w-full px-5 h-full min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center py-6">
        <div className="flex gap-2 items-center">
          {/* Back button to settings page */}
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Edit Privacy Policy</h1>
        </div>
      </div>

      {/* Spinner while loading demo content */}
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spin size="large" />
        </div>
      ) : (
        <div className="w-full rounded-lg bg-white">
          {/* Form Section */}
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {/* Jodit Editor for Privacy Policy Content */}
            <Form.Item>
              <JoditEditor
                ref={editor}
                value={content}
                onBlur={(newContent) => setContent(newContent)} // Update content on blur
              />
            </Form.Item>

            {/* Update Button with loading state */}
            <div className="flex justify-center pb-5">
              <button
                className="px-8 py-3 bg-primary text-white rounded-lg"
                type="submit"
              >
                {isMutating ? "Updating..." : "Update"}
              </button>
            </div>
          </Form>
        </div>
      )}
    </section>
  );
};

export default EditPrivacyPolicy;
