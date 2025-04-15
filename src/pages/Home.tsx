
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1A1F2C] mb-4">
            Heart Disease Detection System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced heart sound analysis using machine learning for accurate disease detection
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0EA5E9] mb-4">Analysis Parameters</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Diagnostic Heart Sound</li>
              <li>• Best Heard Area</li>
              <li>• Intensity (Loudness)</li>
              <li>• Duration (Length)</li>
              <li>• Pitch (Frequency)</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0EA5E9] mb-4">Clinical Factors</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Quality (Characteristics)</li>
              <li>• Timing (Cardiac Cycle)</li>
              <li>• Murmur Configuration</li>
              <li>• Blood Pressure</li>
              <li>• Heart Rate (BPM)</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0EA5E9] mb-4">Patient Data</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Age</li>
              <li>• Gender</li>
              <li>• Risk Level</li>
              <li>• Availability-Diagnosis</li>
              <li>• Medical History</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
