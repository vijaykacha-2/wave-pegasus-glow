
import { motion } from "framer-motion";
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby,
  Stethoscope,
  Microscope,
  Pill,
  Activity,
  Shield,
  UserCheck,
  ClipboardList
} from "lucide-react";
import RadialHover from "../components/RadialHover";

const Modules = () => {
  const modules = [
    {
      icon: Heart,
      name: "Cardiology Suite",
      benefit: "Advanced cardiovascular monitoring and risk assessment tools",
      features: ["ECG Analysis", "Heart Rate Monitoring", "Risk Calculators"],
      color: "blue"
    },
    {
      icon: Brain,
      name: "Neurology Module",
      benefit: "Comprehensive neurological assessment and cognitive testing",
      features: ["Cognitive Tests", "Seizure Tracking", "Neural Imaging"],
      color: "purple"
    },
    {
      icon: Eye,
      name: "Ophthalmology Tools",
      benefit: "Complete eye care management and vision tracking",
      features: ["Vision Tests", "Retinal Scanning", "Prescription Tracking"],
      color: "green"
    },
    {
      icon: Bone,
      name: "Orthopedics Center",
      benefit: "Musculoskeletal health monitoring and treatment planning",
      features: ["X-ray Analysis", "Range of Motion", "Recovery Tracking"],
      color: "blue"
    },
    {
      icon: Baby,
      name: "Pediatrics Module",
      benefit: "Specialized tools for child healthcare and development",
      features: ["Growth Charts", "Vaccination Tracking", "Development Milestones"],
      color: "purple"
    },
    {
      icon: Stethoscope,
      name: "Internal Medicine",
      benefit: "Comprehensive primary care management system",
      features: ["Symptom Checker", "Diagnosis Assistant", "Treatment Plans"],
      color: "green"
    },
    {
      icon: Microscope,
      name: "Laboratory Integration",
      benefit: "Seamless lab result management and analysis",
      features: ["Result Analysis", "Trend Monitoring", "Alert System"],
      color: "blue"
    },
    {
      icon: Pill,
      name: "Pharmacy Connect",
      benefit: "Medication management and prescription tracking",
      features: ["Drug Interactions", "Dosage Calculators", "Refill Reminders"],
      color: "purple"
    },
    {
      icon: Activity,
      name: "Emergency Medicine",
      benefit: "Critical care protocols and emergency response tools",
      features: ["Triage System", "Emergency Protocols", "Critical Alerts"],
      color: "green"
    },
    {
      icon: Shield,
      name: "Infection Control",
      benefit: "Disease prevention and outbreak management",
      features: ["Contact Tracing", "Infection Monitoring", "Prevention Protocols"],
      color: "blue"
    },
    {
      icon: UserCheck,
      name: "Patient Portal",
      benefit: "Enhanced patient engagement and self-service tools",
      features: ["Appointment Booking", "Test Results", "Communication"],
      color: "purple"
    },
    {
      icon: ClipboardList,
      name: "Quality Assurance",
      benefit: "Performance monitoring and quality improvement tools",
      features: ["Quality Metrics", "Compliance Tracking", "Audit Tools"],
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
            Professional
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Modules
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized tools for every medical specialty, designed by healthcare 
            professionals for healthcare professionals.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <RadialHover glowColor={module.color} className="w-full max-w-sm">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200/50 h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    module.color === "blue" ? "bg-blue-100" :
                    module.color === "purple" ? "bg-purple-100" :
                    "bg-green-100"
                  }`}>
                    <module.icon className={`w-8 h-8 ${
                      module.color === "blue" ? "text-blue-600" :
                      module.color === "purple" ? "text-purple-600" :
                      "text-green-600"
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {module.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {module.benefit}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Key Features:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Need a Custom Module?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We can create specialized modules tailored to your unique practice needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
              >
                Request Custom Module
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Modules;
