
import { useState } from 'react';

const Predict = () => {
  const [prediction, setPrediction] = useState("");
  const [formData, setFormData] = useState({
    heartSound: "",
    duration: "",
    quality: "",
    timing: "",
    murmurConfig: "",
    diagnosis: "",
    bloodPressure: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate prediction
    const risks = ["Low", "Medium", "High"];
    setPrediction(risks[Math.floor(Math.random() * risks.length)]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1A1F2C] mb-6">Heart Disease Prediction</h2>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Diagnostic Heart Sound (1-5)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                required
                className="w-full p-2 border rounded-md"
                value={formData.heartSound}
                onChange={(e) => setFormData({...formData, heartSound: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (sec)
              </label>
              <input
                type="number"
                required
                className="w-full p-2 border rounded-md"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quality (1-5)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                required
                className="w-full p-2 border rounded-md"
                value={formData.quality}
                onChange={(e) => setFormData({...formData, quality: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Timing (1-5)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                required
                className="w-full p-2 border rounded-md"
                value={formData.timing}
                onChange={(e) => setFormData({...formData, timing: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Murmur Configuration (1-5)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                required
                className="w-full p-2 border rounded-md"
                value={formData.murmurConfig}
                onChange={(e) => setFormData({...formData, murmurConfig: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability-Diagnosis (0/1)
              </label>
              <select
                required
                className="w-full p-2 border rounded-md"
                value={formData.diagnosis}
                onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
              >
                <option value="">Select value</option>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blood Pressure (systolic/diastolic)
              </label>
              <input
                type="text"
                placeholder="120/80"
                required
                className="w-full p-2 border rounded-md"
                value={formData.bloodPressure}
                onChange={(e) => setFormData({...formData, bloodPressure: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0EA5E9] text-white py-2 px-4 rounded-md hover:bg-[#0EA5E9]/90 transition-colors"
            >
              Predict Risk Level
            </button>
          </div>
        </form>

        {prediction && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Prediction Result:</h3>
            <p className="text-lg">
              Risk Level: <span className="font-bold text-[#0EA5E9]">{prediction}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
