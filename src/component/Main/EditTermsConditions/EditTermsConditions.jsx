import { Form, Spin } from "antd";
import JoditEditor from "jodit-react"; // Import Jodit Editor
import { useEffect, useRef, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EditTermsConditions = () => {
  const [form] = Form.useForm();
  const [content, setContent] = useState(""); // State for Terms and Conditions content
  const [isLoading, setIsLoading] = useState(false); // Simulate loading state
  const [isUpdating, setIsUpdating] = useState(false); // Simulate updating state
  const editor = useRef(null);
  const navigate = useNavigate();

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
      setContent(demoTermsConditions);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [demoTermsConditions]);

  // Simulate updating Terms and Conditions content
  const handleSubmit = async () => {
    try {
      setIsUpdating(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Terms and Conditions updated successfully.");
      navigate("/settings");
    } catch (error) {
      toast.error("Failed to update Terms and Conditions.");
    } finally {
      setIsUpdating(false);
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
          <h1 className="text-2xl font-semibold">Edit Terms and Conditions</h1>
        </div>
      </div>

      {/* Spinner while loading demo content */}
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spin />
        </div>
      ) : (
        <div className="w-full rounded-lg bg-white">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {/* JoditEditor for editing Terms and Conditions content */}
            <Form.Item>
              <JoditEditor
                ref={editor} // Attach the ref to the JoditEditor
                value={content}
                onChange={(newContent) => setContent(newContent)} // Handle changes
              />
            </Form.Item>

            {/* Update Button with loading state */}
            <div className="flex justify-center pb-5">
              <button
                className="px-8 py-3 bg-primary text-white rounded-lg"
                type="submit"
              >
                {isUpdating ? "Updating..." : "Update"}
              </button>
            </div>
          </Form>
        </div>
      )}
    </section>
  );
};

export default EditTermsConditions;
