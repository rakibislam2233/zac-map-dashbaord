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

// Sample data for companies
const companiesData = [
  {
    key: 1,
    id: 1,
    name: "Transport Solutions Inc",
    email: "contact@transportsolutions.com",
    phone: "9876543210",
    registrationDate: "10 Jan 2024",
    companyCode: "TS001",
    address: "123 Business Ave, City Center",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 2,
    id: 2,
    name: "Swift Logistics Ltd",
    email: "info@swiftlogistics.com",
    phone: "9876543211",
    registrationDate: "15 Jan 2024",
    companyCode: "SL002",
    address: "456 Commerce Street, Downtown",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 3,
    id: 3,
    name: "Metro Cargo Services",
    email: "hello@metrocargo.com",
    phone: "9876543212",
    registrationDate: "20 Jan 2024",
    companyCode: "MC003",
    address: "789 Industrial Park, Sector 5",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 4,
    id: 4,
    name: "Express Freight Co",
    email: "support@expressfreight.com",
    phone: "9876543213",
    registrationDate: "25 Jan 2024",
    companyCode: "EF004",
    address: "321 Logistics Hub, North Zone",
    profileImage: "/api/placeholder/150/150",
  },
  {
    key: 5,
    id: 5,
    name: "Global Transport Network",
    email: "admin@globaltransport.com",
    phone: "9876543214",
    registrationDate: "30 Jan 2024",
    companyCode: "GT005",
    address: "654 Transport Plaza, East District",
    profileImage: "/api/placeholder/150/150",
  },
];
const AllCompany = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(companiesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyDetails, setCompanyDetails] = useState(null);

  // Handle search
  const handleSearch = (value) => {
    setSearchText(value);
    if (!value) {
      setFilteredData(companiesData);
    } else {
      const filtered = companiesData.filter(
        (company) =>
          company.name.toLowerCase().includes(value.toLowerCase()) ||
          company.email.toLowerCase().includes(value.toLowerCase()) ||
          company.companyCode.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Handle view action
  const handleView = (record) => {
    setCompanyDetails(record);
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
      title: "Company Name",
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
      title: "Company Code",
      dataIndex: "companyCode",
      key: "companyCode",
    },
    {
      title: "Registration Date",
      dataIndex: "registrationDate",
      key: "registrationDate",
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
          <h2 className="text-2xl font-semibold">All Companies</h2>
          <Input
            placeholder="Search companies..."
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

      {/* Company Details Modal */}
      <Modal
        open={isModalOpen}
        centered
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={500}
      >
        {companyDetails && (
          <div className="p-4">
            {/* Profile Image and Name */}
            <div className="flex flex-col text-center items-center gap-4">
              <img
                src={companyDetails.profileImage}
                alt={companyDetails.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-blue-600"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {companyDetails.name}
                </h2>
              </div>
            </div>
            {/* Company Details */}
            <div className="space-y-7 mt-8">
              {/* Company ID */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Company ID:</p>
                </div>
                <p className="text-gray-800 text-sm">{companyDetails.id}</p>
              </div>
              {/* Email */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Email:</p>
                </div>
                <p className="text-gray-800 text-sm">{companyDetails.email}</p>
              </div>
              {/* Phone */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Phone:</p>
                </div>
                <p className="text-gray-800 text-sm">{companyDetails.phone}</p>
              </div>
              {/* Company Code */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaIdCard className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Company Code:</p>
                </div>
                <p className="text-gray-800 text-sm">
                  {companyDetails.companyCode}
                </p>
              </div>
              {/* Registration Date */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Registration Date:</p>
                </div>
                <p className="text-gray-800 text-sm">
                  {companyDetails.registrationDate}
                </p>
              </div>
              {/* Address */}
              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-gray-600 w-5 h-5" />
                  <p className="text-sm text-gray-500">Address:</p>
                </div>
                <p className="text-gray-800 text-sm text-right">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default AllCompany;
