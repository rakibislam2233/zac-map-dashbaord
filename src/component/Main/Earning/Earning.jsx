import { useState } from "react";
import { Table, Modal } from "antd";
import { FaEnvelope, FaUserAlt, FaDollarSign } from "react-icons/fa";
import { Info } from "lucide-react";

const Earnings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEarning, setSelectedEarning] = useState(null);

  // Demo data for earnings
  const demoEarnings = [
    {
      id: "ERN12345678",
      driverName: "John Doe",
      companyName: "Swift Transport Co",
      totalAmount: 250,
      commission: 25,
      netEarning: 225,
      date: "16 Apr 2024",
      driverEmail: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main St, City",
      status: "paid",
      tripCount: 8,
      vehicleType: "Sedan",
    },
    {
      id: "ERN12345679",
      driverName: "Jane Smith",
      companyName: "Metro Logistics",
      totalAmount: 180,
      commission: 18,
      netEarning: 162,
      date: "15 Apr 2024",
      driverEmail: "jane.smith@example.com",
      phone: "+1234567891",
      address: "456 Oak Ave, City",
      status: "paid",
      tripCount: 6,
      vehicleType: "SUV",
    },
    {
      id: "ERN12345680",
      driverName: "Mike Johnson",
      companyName: "Express Delivery",
      totalAmount: 320,
      commission: 32,
      netEarning: 288,
      date: "14 Apr 2024",
      driverEmail: "mike.johnson@example.com",
      phone: "+1234567892",
      address: "789 Pine St, City",
      status: "pending",
      tripCount: 12,
      vehicleType: "Van",
    },
    {
      id: "ERN12345681",
      driverName: "Emma Wilson",
      companyName: "City Cab Services",
      totalAmount: 275,
      commission: 27.5,
      netEarning: 247.5,
      date: "13 Apr 2024",
      driverEmail: "emma.wilson@example.com",
      phone: "+1234567893",
      address: "321 Elm St, City",
      status: "paid",
      tripCount: 10,
      vehicleType: "Sedan",
    },
    {
      id: "ERN12345682",
      driverName: "Chris Brown",
      companyName: "Rapid Transit",
      totalAmount: 195,
      commission: 19.5,
      netEarning: 175.5,
      date: "12 Apr 2024",
      driverEmail: "chris.brown@example.com",
      phone: "+1234567894",
      address: "654 Maple Ave, City",
      status: "processing",
      tripCount: 7,
      vehicleType: "Hatchback",
    },
  ];

  const isLoading = false;
  const allEarnings = demoEarnings;

  // Transform data for table display
  const transformedEarnings =
    allEarnings?.map((earning) => ({
      key: earning?.id,
      earningId: earning?.id?.slice(-6), // Show last 6 characters of ID
      driverName: earning?.driverName,
      companyName: earning?.companyName,
      totalAmount: earning?.totalAmount,
      commission: earning?.commission,
      netEarning: earning?.netEarning,
      date: earning?.date,
      driverEmail: earning?.driverEmail,
      phone: earning?.phone,
      address: earning?.address,
      status: earning?.status || "paid",
      tripCount: earning?.tripCount,
      vehicleType: earning?.vehicleType,
    })) || [];

  const handleSelectEarning = (earning) => {
    setSelectedEarning(earning);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "#Earning ID",
      dataIndex: "earningId",
      key: "earningId",
      width: 120,
      render: (text) => (
        <span className="font-medium text-gray-700">#{text}</span>
      ),
    },
    {
      title: "Company",
      dataIndex: "companyName",
      key: "companyName",
      width: 150,
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Amount",
      dataIndex: "netEarning",
      key: "netEarning",
      width: 120,
      render: (amount) => (
        <span className="font-semibold text-green-600">${amount}</span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 120,
      render: (date) => <span className="text-gray-600">{date}</span>,
    },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (_, record) => (
        <button
          onClick={() => handleSelectEarning(record)}
          className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
        >
          <Info className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen px-5 bg-gray-100">
      <div className="bg-white rounded-lg mb-5">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">All Earnings</h1>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <Table
            columns={columns}
            loading={isLoading}
            dataSource={transformedEarnings}
            className="custom-earnings-table"
            pagination={false}
            scroll={{ x: 900 }}
            rowClassName="hover:bg-gray-50"
          />
        </div>

        {/* Earning Details Modal */}
        <Modal
          open={isModalOpen}
          centered
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          width={600}
          title={
            <div className="text-center pb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Earning Details
              </h2>
            </div>
          }
        >
          {selectedEarning && (
            <div className="px-4">
              {/* Profile Section */}
              <div className="flex flex-col text-center items-center gap-4">
                <div className="size-20 mx-auto rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center border-4 border-green-100 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {selectedEarning.driverName.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {selectedEarning.driverName}
                  </h3>
                  <p className="text-sm text-gray-500">Company</p>
                </div>
              </div>

              {/* Earning Details */}
              <div className="space-y-3">
                {/* Earning ID */}
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaUserAlt className="text-blue-500 size-4" />
                    <p className="text-sm font-medium text-gray-600">
                      Earning ID
                    </p>
                  </div>
                  <p className="text-gray-800 font-semibold">
                    #{selectedEarning.earningId}
                  </p>
                </div>

                {/* Driver Email */}
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-500 size-4" />
                    <p className="text-sm font-medium text-gray-600">Email</p>
                  </div>
                  <p className="text-gray-800">{selectedEarning.driverEmail}</p>
                </div>

                {/* Company Name */}
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaUserAlt className="text-blue-500 size-4" />
                    <p className="text-sm font-medium text-gray-600">Company</p>
                  </div>
                  <p className="text-gray-800">{selectedEarning.companyName}</p>
                </div>

                {/* Total Amount */}
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaDollarSign className="text-blue-500 size-4" />
                    <p className="text-sm font-medium text-gray-600">
                      Total Amount
                    </p>
                  </div>
                  <p className="text-gray-800 font-bold text-lg">
                    ${selectedEarning.totalAmount}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Earnings;
