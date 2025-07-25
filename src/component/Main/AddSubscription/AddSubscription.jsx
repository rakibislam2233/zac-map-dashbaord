import { Button, Form } from "antd";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomInput from "../../../utils/CustomInput";
import { TbTrash } from "react-icons/tb";
import { PlusOutlined } from "@ant-design/icons";
import CustomButton from "../../../utils/CustomButton";

const AddSubscription = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-5 pb-5 bg-white rounded-lg">
      <div className="flex justify-between items-center py-6">
        <div className="flex gap-2 items-center">
          <Link to="/subscriptions">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Add Subscription Plan</h1>
        </div>
      </div>
      <Form name="add-subscription" layout="vertical">
        {/* Subscription Name */}
        <Form.Item
          name="subscriptionName"
          label="Subscription Name"
          rules={[
            { required: true, message: "Please enter subscription name!" },
          ]}
        >
          <CustomInput placeholder="Enter subscription name" />
        </Form.Item>

        {/* Subscription Type */}
        <Form.Item
          name="subscriptionType"
          label="Subscription Type"
          rules={[
            { required: true, message: "Please select subscription type!" },
          ]}
        >
          <select
            placeholder="Select subscription type"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            style={{ width: "100%" }}
          >
            {[
              { value: "free", label: "Free" },
              { value: "paid", label: "Paid" },
            ].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Form.Item>

        {/* Subscription Frequency */}
        <Form.Item
          name="subscriptionFrequency"
          label="Subscription Frequency"
          rules={[
            {
              required: true,
              message: "Please select subscription frequency!",
            },
          ]}
        >
          <select
            placeholder="Select subscription frequency"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            {[
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
              { value: "monthly", label: "Monthly" },
              { value: "yearly", label: "Yearly" },
            ].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Form.Item>

        {/* Subscription Duration */}
        <Form.Item
          name="subscriptionDuration"
          label="Subscription Duration"
          rules={[
            { required: true, message: "Please enter subscription duration!" },
            { pattern: /^[0-9]+$/, message: "Only numbers allowed" },
          ]}
        >
          <CustomInput placeholder="Enter subscription duration" />
        </Form.Item>

        {/* Subscription Fee (Western) */}
        <Form.Item
          name={["subscriptionFee", "western"]}
          label="Subscription Fee (Western - €)"
          rules={[
            {
              required: true,
              message: "Please enter fee for Western countries!",
            },
            { pattern: /^[0-9]+(\.[0-9]+)?$/, message: "Only numbers allowed" },
          ]}
        >
          <CustomInput placeholder="Enter fee for Western countries" />
        </Form.Item>

        {/* Subscription Fee (Africa) */}
        <Form.Item
          name={["subscriptionFee", "africa"]}
          label="Subscription Fee (Africa - €)"
          rules={[
            { required: true, message: "Please enter fee for Africa!" },
            { pattern: /^[0-9]+(\.[0-9]+)?$/, message: "Only numbers allowed" },
          ]}
        >
          <CustomInput placeholder="Enter fee for Africa" />
        </Form.Item>

        {/* Features (Dynamic List) */}
        <Form.List
          name="features"
          rules={[
            {
              validator: async (_, features) => {
                if (!features || features.length < 1) {
                  return Promise.reject(
                    new Error("At least one feature is required")
                  );
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div
                  key={key}
                  className="w-full flex items-center justify-between gap-5"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "feature"]}
                    rules={[
                      { required: true, message: "Please enter a feature!" },
                    ]}
                    className="w-full"
                  >
                    <CustomInput
                      placeholder="Enter feature"
                      className="w-full"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <TbTrash
                    className="text-red-500 size-6 cursor-pointer -mt-7"
                    onClick={() => remove(name)}
                  />
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  block
                >
                  Add Feature
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        {/* Submit Button */}
        <Form.Item>
          <CustomButton>Add Subscription</CustomButton>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AddSubscription;
