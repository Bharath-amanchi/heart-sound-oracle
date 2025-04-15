
document.addEventListener('DOMContentLoaded', function() {
  // Sample dataset (in a real application, this would come from a server)
  const sampleData = [
    { id: 1, sound: 3, duration: 5, quality: 4, timing: 2, risk: "Medium", diagnosis: "Mitral Regurgitation" },
    { id: 2, sound: 4, duration: 3, quality: 5, timing: 1, risk: "High", diagnosis: "Aortic Stenosis" },
    { id: 3, sound: 2, duration: 4, quality: 3, timing: 3, risk: "Low", diagnosis: "Normal" },
    { id: 4, sound: 5, duration: 6, quality: 2, timing: 4, risk: "High", diagnosis: "Mitral Stenosis" },
    { id: 5, sound: 1, duration: 3, quality: 1, timing: 2, risk: "Low", diagnosis: "Normal" },
    { id: 6, sound: 4, duration: 5, quality: 4, timing: 1, risk: "Medium", diagnosis: "Tricuspid Regurgitation" },
    { id: 7, sound: 3, duration: 4, quality: 2, timing: 3, risk: "Medium", diagnosis: "Aortic Regurgitation" },
    { id: 8, sound: 2, duration: 3, quality: 5, timing: 2, risk: "Low", diagnosis: "Normal" },
    { id: 9, sound: 5, duration: 7, quality: 3, timing: 4, risk: "High", diagnosis: "Atrial Septal Defect" },
    { id: 10, sound: 1, duration: 2, quality: 1, timing: 1, risk: "Low", diagnosis: "Normal" }
  ];

  // Populate the dataset table
  const tableBody = document.getElementById('dataset-table-body');
  
  sampleData.forEach(item => {
    const row = document.createElement('tr');
    
    // Create and append cells
    const idCell = document.createElement('td');
    idCell.textContent = item.id;
    row.appendChild(idCell);
    
    const soundCell = document.createElement('td');
    soundCell.textContent = item.sound;
    row.appendChild(soundCell);
    
    const durationCell = document.createElement('td');
    durationCell.textContent = item.duration + " sec";
    row.appendChild(durationCell);
    
    const qualityCell = document.createElement('td');
    qualityCell.textContent = item.quality;
    row.appendChild(qualityCell);
    
    const timingCell = document.createElement('td');
    timingCell.textContent = item.timing;
    row.appendChild(timingCell);
    
    const riskCell = document.createElement('td');
    riskCell.textContent = item.risk;
    
    // Add color coding for risk level
    if (item.risk === "High") {
      riskCell.style.color = "#ef4444";
    } else if (item.risk === "Medium") {
      riskCell.style.color = "#f59e0b";
    } else {
      riskCell.style.color = "#22c55e";
    }
    
    row.appendChild(riskCell);
    
    const diagnosisCell = document.createElement('td');
    diagnosisCell.textContent = item.diagnosis;
    row.appendChild(diagnosisCell);
    
    // Add the row to the table
    tableBody.appendChild(row);
  });
});
