/* eslint-disable no-dupe-keys */
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Form, Spin } from "antd";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CustomButton from "../../../utils/CustomButton";
import JoditEditor from "jodit-react";

const EditAboutUs = () => {
  const [form] = Form.useForm();
  const [content, setContent] = useState(""); // State for About Us content
  const [isLoading, setIsLoading] = useState(false); // Simulate loading state
  const [isUpdating, setIsUpdating] = useState(false); // Simulate updating state
  const navigate = useNavigate();

  // Demo About Us content
  const demoAboutUs = `
    <div className="prose max-w-none">
      <h2>Welcome to Our Company</h2>
      <p>
        We are a passionate team dedicated to delivering innovative solutions that empower our users. 
        Established in 2020, our mission is to create meaningful impact through technology and exceptional user experiences.
      </p>
      <h3>Our Vision</h3>
      <p>
        To be a global leader in transformative digital solutions, fostering creativity and collaboration.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Innovation: Pushing boundaries with cutting-edge technology</li>
        <li>Integrity: Maintaining transparency and trust</li>
        <li>Excellence: Striving for the highest quality in everything we do</li>
      </ul>
    </div>
  `;

  // Simulate fetching demo content on component mount
  useEffect(() => {
    setIsLoading(true);
    // Simulate API delay
    const timer = setTimeout(() => {
      setContent(demoAboutUs);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate updating About Us content
  const handleSubmit = async () => {
    try {
      setIsUpdating(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("About Us updated successfully.");
      navigate("/settings");
    } catch (error) {
      toast.error("Failed to update About Us.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <section className="w-full px-5 h-full min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-4 items-center">
          {/* Back button to settings page */}
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Edit About Us</h1>
        </div>
      </div>

      {/* Spinner while loading demo content */}
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Spin size="large" />
        </div>
      ) : (
        <div className="w-full">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {/* JoditEditor for editing About Us content */}
            <Form.Item label="About Us Content">
              <JoditEditor
                value={content}
                onChange={(value) => setContent(value)}
              />
            </Form.Item>

            {/* Update Button with loading state */}
            <div className="flex justify-end">
              <CustomButton loading={isUpdating}>
                {isUpdating ? "Updating..." : "Update"}
              </CustomButton>
            </div>
          </Form>
        </div>
      )}
    </section>
  );
};

export default EditAboutUs;
