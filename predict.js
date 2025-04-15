
document.addEventListener('DOMContentLoaded', function() {
  const predictionForm = document.getElementById('prediction-form');
  const resultContainer = document.getElementById('result-container');
  const predictionResult = document.getElementById('prediction-result');
  const riskLevel = document.getElementById('risk-level');
  const newPredictionBtn = document.getElementById('new-prediction');
  
  // Handle form submission
  predictionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const diagnosticSound = parseInt(document.getElementById('diagnostic-sound').value);
    const duration = parseFloat(document.getElementById('duration').value);
    const quality = parseInt(document.getElementById('quality').value);
    const timing = parseInt(document.getElementById('timing').value);
    const murmur = parseInt(document.getElementById('murmur').value);
    const availability = parseInt(document.getElementById('availability').value);
    const bloodPressure = document.getElementById('blood-pressure').value;
    
    // In a real application, we would send this data to a backend server
    // For this demo, we'll simulate a prediction based on the input
    
    // Simple prediction logic (this would be ML-based in a real app)
    let diagnosis = "";
    let risk = "";
    
    // Calculate a simple risk score based on inputs
    const riskScore = diagnosticSound + quality + timing + murmur;
    
    // Determine risk level based on the score
    if (riskScore > 15) {
      risk = "High Risk";
    } else if (riskScore > 10) {
      risk = "Medium Risk";
    } else {
      risk = "Low Risk";
    }
    
    // Determine a simulated diagnosis based on the inputs
    if (diagnosticSound >= 4 && murmur >= 4) {
      diagnosis = "Potential Valvular Disease";
    } else if (diagnosticSound >= 3 && timing <= 2) {
      diagnosis = "Potential Arrhythmia";
    } else if (murmur >= 3 && quality >= 4) {
      diagnosis = "Possible Structural Abnormality";
    } else if (riskScore < 8) {
      diagnosis = "Normal Heart Function";
    } else {
      diagnosis = "Indeterminate - Further Testing Required";
    }
    
    // Display the results
    predictionResult.textContent = diagnosis;
    riskLevel.textContent = risk;
    
    // Show the result container and hide the form
    predictionForm.style.display = 'none';
    resultContainer.classList.remove('hidden');
    
    // Show notification
    showToast("Prediction complete!", "success");
  });
  
  // New prediction button
  newPredictionBtn.addEventListener('click', function() {
    // Reset the form
    predictionForm.reset();
    
    // Hide results and show form again
    predictionForm.style.display = 'block';
    resultContainer.classList.add('hidden');
  });
});
