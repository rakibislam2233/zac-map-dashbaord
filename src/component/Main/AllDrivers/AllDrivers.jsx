import { useState } from "react";
import { Table, Input, ConfigProvider, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  FaUserAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaPhone,
  FaIdCard,
} from "react-icons/fa";

// Sample data for drivers
const driversData = [
  {
    key: 1,
    id: 1,
    name: "John Smith",
    email: "john.smith@gmail.com",
    phone: "1234567890",
    joinDate: "15 Mar 2024",
    licenseNumber: "DL123456",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 2,
    id: 2,
    name: "Mike Johnson",
    email: "mike.johnson@gmail.com",
    phone: "1234567891",
    joinDate: "20 Mar 2024",
    licenseNumber: "DL123457",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 3,
    id: 3,
    name: "David Wilson",
    email: "david.wilson@gmail.com",
    phone: "1234567892",
    joinDate: "25 Mar 2024",
    licenseNumber: "DL123458",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 4,
    id: 4,
    name: "Robert Brown",
    email: "robert.brown@gmail.com",
    phone: "1234567893",
    joinDate: "01 Apr 2024",
    licenseNumber: "DL123459",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 5,
    id: 5,
    name: "James Davis",
    email: "james.davis@gmail.com",
    phone: "1234567894",
    joinDate: "05 Apr 2024",
    licenseNumber: "DL123460",
    profileImage: "/api/placeholder/150/150",
  },
];


const AllDrivers = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(driversData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [driverDetails, setDriverDetails] = useState(null);

  // Handle search
  const handleSearch = (value) => {
    setSearchText(value);
    if (!value) {
      setFilteredData(driversData);
    } else {
      const filtered = driversData.filter(
        (driver) =>
          driver.name.toLowerCase().includes(value.toLowerCase()) ||
          driver.email.toLowerCase().includes(value.toLowerCase()) ||
          driver.licenseNumber.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Handle view action
  const handleView = (record) => {
    setDriverDetails(record);
    setIsModalOpen(true);
  };

  // Table columns
  const columns = [
    {
      title: "#Sl",
      key: "serial",
      width: 60,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Driver Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "License Number",
      dataIndex: "licenseNumber",
      key: "licenseNumber",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
    },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (text, record) => (
        <button
          onClick={() => handleView(record)}
          className="px-5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          View
        </button>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen px-5 bg-gray-100">
      <div className="bg-white rounded-lg mb-5">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-2xl font-semibold">All Drivers</h2>
          <Input
            placeholder="Search drivers..."
            prefix={<SearchOutlined />}
            value={searchText}
            size="large"
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 300 }}
            allowClear
          />
        </div>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#0116C5",
                headerColor: "#fff",
                headerBorderRadius: 5,
              },
            },
          }}
        >
          <Table
            pagination={{
              position: ["bottomCenter"],
              defaultPageSize: 10,
              showSizeChanger: false,
            }}
            columns={columns}
            dataSource={filteredData}
            rowKey="key"
            scroll={{ x: "max-content" }}
          />
        </ConfigProvider>
      </div>

      {/* Driver Details Modal */}
      <Modal
        open={isModalOpen}
        centered
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={500}
      >
        {driverDetails && (
          <div className="p-4">
            {/* Profile Image and Name */}
            <div className="flex flex-col text-center items-center gap-4">
              <img
                src={driverDetails.profileImage}
                alt={driverDetails.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-blue-600"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {driverDetails.name}
                </h2>
              </div>
            </div>
            {/* Driver Details */}
            <div className="space-y-7 mt-8">
              {/* Driver ID */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Driver ID:</p>
                </div>
                <p className="text-gray-800 text-sm">{driverDetails.id}</p>
              </div>
              {/* Email */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Email:</p>
                </div>
                <p className="text-gray-800 text-sm">{driverDetails.email}</p>
              </div>
              {/* Phone */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Phone:</p>
                </div>
                <p className="text-gray-800 text-sm">{driverDetails.phone}</p>
              </div>
              {/* License Number */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaIdCard className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">License Number:</p>
                </div>
                <p className="text-gray-800 text-sm">
                  {driverDetails.licenseNumber}
                </p>
              </div>
              {/* Join Date */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Join Date:</p>
                </div>
                <p className="text-gray-800 text-sm">
                  {driverDetails.joinDate}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default AllDrivers;
