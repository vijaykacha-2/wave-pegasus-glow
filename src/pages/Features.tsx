
import { motion } from "framer-motion";
import { 
  Brain, 
  Workflow, 
  Shield, 
  BarChart3, 
  Clock, 
  Users,
  FileText,
  MessageSquare,
  Stethoscope
} from "lucide-react";
import RadialHover from "../components/RadialHover";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms to assist in medical diagnostics and decision making",
      color: "blue"
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Streamline patient intake, scheduling, and follow-up processes with intelligent automation",
      color: "purple"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security ensuring full compliance with healthcare regulations",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into practice performance and patient outcomes",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Live tracking of patient vitals and immediate alerts for critical situations",
      color: "purple"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless communication tools for medical teams and departments",
      color: "green"
    },
    {
      icon: FileText,
      title: "Smart Documentation",
      description: "AI-assisted medical record creation and management with voice recognition",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Patient Communication",
      description: "Automated patient reminders, notifications, and telemedicine integration",
      color: "purple"
    },
    {
      icon: Stethoscope,
      title: "Clinical Decision Support",
      description: "Evidence-based recommendations and drug interaction warnings",
      color: "green"
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
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Features
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive suite of tools designed to revolutionize 
            your healthcare practice and improve patient outcomes.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <RadialHover glowColor={feature.color} className="w-full max-w-sm">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200/50 h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    feature.color === "blue" ? "bg-blue-100" :
                    feature.color === "purple" ? "bg-purple-100" :
                    "bg-green-100"
                  }`}>
                    <feature.icon className={`w-8 h-8 ${
                      feature.color === "blue" ? "text-blue-600" :
                      feature.color === "purple" ? "text-purple-600" :
                      "text-green-600"
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </RadialHover>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your free trial today and see how EyePegasus can transform your practice.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
