const STORAGE_KEY = 'carealert_patients';

function getPatients() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function savePatient(patient) {
    const patients = getPatients();
    const now = new Date();
    
    if (patient.id) {
        // Update existing record
        const index = patients.findIndex(p => p.id === patient.id);
        if (index !== -1) {
            // Merge existing review/actions to avoid overwriting doctor's work
            patient.review = patients[index].review;
            patient.actionTaken = patients[index].actionTaken;
            patient.actionTimestamp = patients[index].actionTimestamp;
            // Update the main record data but keep old timestamp logic
            patient.timestamp = patients[index].timestamp;
            patients[index] = patient;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
            return;
        }
    }
    
    // Create new patient record
    patient.id = Date.now().toString();
    patient.timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + 
                        now.toLocaleDateString([], { month: 'short', day: 'numeric' });
                        
    patients.push(patient);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
}

function updatePatientAction(patientId, actionString) {
    const patients = getPatients();
    const index = patients.findIndex(p => p.id === patientId);
    if (index !== -1) {
        patients[index].actionTaken = actionString;
        const now = new Date();
        patients[index].actionTimestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
    }
}

function updatePatientReview(patientId, reviewData) {
    const patients = getPatients();
    const index = patients.findIndex(p => p.id === patientId);
    if (index !== -1) {
        reviewData.timestamp = Date.now();
        patients[index].review = reviewData;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
    }
}

function clearPatients() {
    localStorage.removeItem(STORAGE_KEY);
}
