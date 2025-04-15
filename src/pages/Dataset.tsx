
const Dataset = () => {
  const data = [
    {
      id: 1,
      heartSound: "S1 (First Heart Sound)",
      heardArea: "Apex",
      intensity: "Normal",
      duration: "0.1s",
      pitch: "Low",
      quality: "Soft",
      timing: "Systolic",
      config: "Crescendo",
      diagnosis: "Available",
      age: 45,
      gender: "Male",
      heartRate: 72,
      bp: "120/80",
      risk: "Low"
    },
    {
      id: 2,
      heartSound: "S2 (Second Heart Sound)",
      heardArea: "Base",
      intensity: "Loud",
      duration: "0.12s",
      pitch: "High",
      quality: "Sharp",
      timing: "Diastolic",
      config: "Decrescendo",
      diagnosis: "Available",
      age: 62,
      gender: "Female",
      heartRate: 88,
      bp: "140/90",
      risk: "Medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1A1F2C] mb-6">Heart Sound Dataset</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-[#0EA5E9] text-white">
                <th className="py-3 px-4 text-left">Heart Sound</th>
                <th className="py-3 px-4 text-left">Heard Area</th>
                <th className="py-3 px-4 text-left">Intensity</th>
                <th className="py-3 px-4 text-left">Duration</th>
                <th className="py-3 px-4 text-left">Pitch</th>
                <th className="py-3 px-4 text-left">Quality</th>
                <th className="py-3 px-4 text-left">Timing</th>
                <th className="py-3 px-4 text-left">Config</th>
                <th className="py-3 px-4 text-left">Age</th>
                <th className="py-3 px-4 text-left">Gender</th>
                <th className="py-3 px-4 text-left">Heart Rate</th>
                <th className="py-3 px-4 text-left">BP</th>
                <th className="py-3 px-4 text-left">Risk</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{item.heartSound}</td>
                  <td className="py-3 px-4">{item.heardArea}</td>
                  <td className="py-3 px-4">{item.intensity}</td>
                  <td className="py-3 px-4">{item.duration}</td>
                  <td className="py-3 px-4">{item.pitch}</td>
                  <td className="py-3 px-4">{item.quality}</td>
                  <td className="py-3 px-4">{item.timing}</td>
                  <td className="py-3 px-4">{item.config}</td>
                  <td className="py-3 px-4">{item.age}</td>
                  <td className="py-3 px-4">{item.gender}</td>
                  <td className="py-3 px-4">{item.heartRate}</td>
                  <td className="py-3 px-4">{item.bp}</td>
                  <td className="py-3 px-4">{item.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dataset;
