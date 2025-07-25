import { useState } from "react";
import { Table, Tag, Modal } from "antd";
// import { useGetAllBookingsQuery } from "../../../redux/features/booking/bookingApi";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaUserAlt,
  FaDollarSign,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Info } from "lucide-react";

const RecentTransactions = () => {
  // Commented out API call - replace with demo data
  // const { data: responseData, isLoading } = useGetAllBookingsQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Demo data for recent transactions
  const demoTransactions = [
    {
      id: "12345678",
      userName: "Enrique",
      driverName: "John Doe",
      amount: 250,
      date: "16 Apr 2024",
      userEmail: "enrique@example.com",
      phone: "+1234567890",
      address: "123 Main St, City",
      status: "completed",
    },
    {
      id: "12345679",
      userName: "Maria",
      driverName: "Jane Smith",
      amount: 180,
      date: "15 Apr 2024",
      userEmail: "maria@example.com",
      phone: "+1234567891",
      address: "456 Oak Ave, City",
      status: "completed",
    },
    {
      id: "12345680",
      userName: "Carlos",
      driverName: "Mike Johnson",
      amount: 320,
      date: "14 Apr 2024",
      userEmail: "carlos@example.com",
      phone: "+1234567892",
      address: "789 Pine St, City",
      status: "pending",
    },
    {
      id: "12345681",
      userName: "Sofia",
      driverName: "Emma Wilson",
      amount: 275,
      date: "13 Apr 2024",
      userEmail: "sofia@example.com",
      phone: "+1234567893",
      address: "321 Elm St, City",
      status: "completed",
    },
    {
      id: "12345682",
      userName: "Diego",
      driverName: "Chris Brown",
      amount: 195,
      date: "12 Apr 2024",
      userEmail: "diego@example.com",
      phone: "+1234567894",
      address: "654 Maple Ave, City",
      status: "cancelled",
    },
  ];

  const isLoading = false;
  const allTransactions = demoTransactions;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "#69BB41";
      case "pending":
        return "#FBBC05";
      case "cancelled":
        return "#F9C5C0";
      case "processing":
        return "#DBFDCB";
      default:
        return "default";
    }
  };

  // Transform data for table display
  const transformedTransactions =
    allTransactions?.map((transaction) => ({
      key: transaction?.id,
      transactionId: transaction?.id?.slice(-6), // Show last 6 characters of ID
      userName: transaction?.userName,
      driverName: transaction?.driverName,
      amount: transaction?.amount,
      date: transaction?.date,
      userEmail: transaction?.userEmail,
      phone: transaction?.phone,
      address: transaction?.address,
      status: transaction?.status || "completed",
    })) || [];

  const handleSelectTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "#Tr.ID",
      dataIndex: "transactionId",
      key: "transactionId",
      width: 100,
      render: (text) => (
        <span className="font-medium text-gray-700">{text}</span>
      ),
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      width: 150,
      render: (text) => (
        <div className="flex items-center font-medium text-gray-800">
          {text}
        </div>
      ),
    },
    {
      title: "Company Name",
      dataIndex: "driverName",
      key: "driverName",
      width: 150,
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 120,
      render: (amount) => (
        <span className="font-semibold text-gray-800">${amount}</span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 150,
      render: (date) => <span className="text-gray-600">{date}</span>,
    },
    {
      title: "Action",
      key: "action",
      width: 80,
      render: (_, record) => (
        <button
          onClick={() => handleSelectTransaction(record)}
          className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
        >
          <Info className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">
          Recent Transactions
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <Table
          columns={columns}
          loading={isLoading}
          dataSource={transformedTransactions}
          className="custom-transactions-table"
          pagination={false}
          scroll={{ x: 800 }}
          rowClassName="hover:bg-gray-50"
        />
      </div>

      {/* Transaction Details Modal */}
      <Modal
        open={isModalOpen}
        centered
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={500}
        title={
          <div className="text-center pb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Transaction Details
            </h2>
          </div>
        }
      >
        {selectedTransaction && (
          <div className="px-4">
            {/* Profile Section */}
            <div className="flex flex-col text-center items-center gap-4">
              <div className="size-20 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-100 shadow-lg">
                <span className="text-white text-2xl font-bold">
                  {selectedTransaction.userName.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {selectedTransaction.userName}
                </h3>
                <p className="text-sm text-gray-500">Customer</p>
              </div>
            </div>

            {/* Transaction Details */}
            <div className="space-y-3">
              {/* Transaction ID */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-blue-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">
                    Transaction ID
                  </p>
                </div>
                <p className="text-gray-800 font-semibold">
                  #{selectedTransaction.transactionId}
                </p>
              </div>

              {/* User Email */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">Email</p>
                </div>
                <p className="text-gray-800">{selectedTransaction.userEmail}</p>
              </div>

              {/* Driver Name */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-blue-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">
                    Driver Name
                  </p>
                </div>
                <p className="text-gray-800">
                  {selectedTransaction.driverName}
                </p>
              </div>

              {/* Amount */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FaDollarSign className="text-green-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">Amount</p>
                </div>
                <p className="text-gray-800 font-bold text-lg">
                  ${selectedTransaction.amount}
                </p>
              </div>

              {/* Date */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-blue-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">Date</p>
                </div>
                <p className="text-gray-800">{selectedTransaction.date}</p>
              </div>

              {/* Phone */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">Phone</p>
                </div>
                <p className="text-gray-800">{selectedTransaction.phone}</p>
              </div>

              {/* Address */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">Address</p>
                </div>
                <p className="text-gray-800 text-right max-w-64">
                  {selectedTransaction.address}
                </p>
              </div>

              {/* Status */}
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-blue-500 size-4" />
                  <p className="text-sm font-medium text-gray-600">Status</p>
                </div>
                <Tag
                  color={getStatusColor(selectedTransaction.status)}
                  className="px-3 py-1 rounded-full font-medium capitalize"
                >
                  {selectedTransaction.status}
                </Tag>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RecentTransactions;
