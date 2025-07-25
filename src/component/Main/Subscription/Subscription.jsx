import { ArrowLeft, Check, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Subscription = () => {
  const subscriptions = [
    {
      id: 1,
      name: "Basic",
      price: "0.79",
      duration: "Per Month",
      features: [
        "Early access to new features",
        "Early access to new features",
        "Early access to new features",
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: "9.99",
      duration: "Per Month",
      features: [
        "All Basic features",
        "Priority customer support",
        "Advanced analytics",
        "Custom integrations",
      ],
    },
  ];
  return (
    <div className="w-full min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-6 h-6 text-gray-600 cursor-pointer" />
          <h1 className="text-2xl font-semibold text-gray-900">Subscription</h1>
        </div>
        <Link to="/add-subscription">
          <button className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus className="w-4 h-4" />
            Add subscription
          </button>
        </Link>
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.id}
            className="bg-white rounded-lg border border-gray-200 p-6"
          >
            {/* Plan Name */}
            <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
              {subscription.name}
            </h2>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">$</span>
                <span className="text-4xl font-bold text-gray-900">
                  {subscription.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                {subscription.duration}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {subscription.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
                Edit
              </button>
              <button className="flex-1 bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Subscription;
