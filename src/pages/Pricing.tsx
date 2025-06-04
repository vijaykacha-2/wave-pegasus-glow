
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small practices",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Up to 5 users",
        "Basic modules",
        "24/7 support",
        "HIPAA compliance",
        "Basic analytics",
        "Email integration"
      ],
      isPopular: false,
      color: "blue"
    },
    {
      name: "Professional",
      description: "Most popular for growing practices",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Up to 25 users",
        "All professional modules",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "AI-powered insights",
        "Team collaboration tools"
      ],
      isPopular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      description: "For large healthcare organizations",
      monthlyPrice: 399,
      yearlyPrice: 3990,
      features: [
        "Unlimited users",
        "All modules + custom",
        "Dedicated support",
        "White-label options",
        "Advanced security",
        "Multi-location support",
        "Custom workflows",
        "Enterprise integrations",
        "SLA guarantee"
      ],
      isPopular: false,
      color: "green"
    }
  ];

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we are fully HIPAA compliant with enterprise-grade security. Your data is encrypted and stored securely."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we can integrate with your existing systems. Our team will work with you to ensure seamless integration."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 support via chat, email, and phone. Enterprise customers get dedicated support representatives."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your practice. All plans include our core features 
            and can be customized to your needs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              className={`relative w-16 h-8 rounded-full p-1 transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setIsYearly(!isYearly)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              />
            </motion.button>
            <span className={`text-lg ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 p-8 ${
                plan.isPopular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} className="fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold text-lg transition-all ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {plan.isPopular ? 'Start Free Trial' : 'Get Started'}
                </motion.button>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-700 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of healthcare professionals transforming their practice with EyePegasus.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Start 14-Day Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
