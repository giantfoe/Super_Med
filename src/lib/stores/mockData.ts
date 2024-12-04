import { writable } from 'svelte/store';

export interface MedicalData {
  symptoms: Symptom[];
  conditions: Condition[];
  bodySystems: BodySystem[];
  treatments: Treatment[];
  medications: Medication[];
}

const initialData: MedicalData = {
  bodySystems: {
    "Cardiovascular": {
      parts: ["Heart", "Blood Vessels", "Circulation"],
      commonSymptoms: [
        { id: "chest_pain", name: "Chest Pain", severity: 1-5, urgency: "high" },
        { id: "palpitations", name: "Palpitations", severity: 1-5, urgency: "medium" },
        { id: "shortness_breath", name: "Shortness of Breath", severity: 1-5, urgency: "high" }
      ],
      relatedConditions: ["Hypertension", "Heart Disease", "Arrhythmia"]
    },
    "Respiratory": {
      parts: ["Lungs", "Airways", "Bronchi"],
      commonSymptoms: [
        { id: "cough", name: "Cough", severity: 1-5, urgency: "medium" },
        { id: "wheezing", name: "Wheezing", severity: 1-5, urgency: "medium" },
        { id: "chest_tightness", name: "Chest Tightness", severity: 1-5, urgency: "high" }
      ],
      relatedConditions: ["Asthma", "COPD", "Bronchitis"]
    }
    // ... more systems
  },

  conditions: [
    {
      id: "hypertension",
      name: "Hypertension",
      description: "High blood pressure condition affecting arteries",
      symptoms: ["headache", "dizziness", "chest_pain"],
      riskFactors: ["Age", "Obesity", "Family History", "High Sodium Diet"],
      complications: [
        "Heart Disease",
        "Stroke",
        "Kidney Damage"
      ],
      treatments: [
        {
          type: "Medication",
          options: ["ACE inhibitors", "Beta blockers", "Diuretics"],
          description: "Various medications to lower blood pressure"
        },
        {
          type: "Lifestyle",
          options: ["Reduce sodium", "Exercise", "Stress management"],
          description: "Lifestyle changes to manage blood pressure"
        }
      ],
      recoveryStages: [
        {
          phase: "Initial Control",
          duration: "1-3 months",
          description: "Medication adjustment and lifestyle changes"
        },
        {
          phase: "Stabilization",
          duration: "3-6 months",
          description: "Blood pressure reaches target range"
        }
      ],
      urgency: "chronic",
      commonAgeGroups: ["adult", "senior"],
      genderPrevalence: ["all"],
      specialistTypes: ["Cardiologist", "Internal Medicine"]
    }
    // ... more conditions
  ],

  symptoms: [
    {
      id: "chest_pain",
      name: "Chest Pain",
      description: "Discomfort or pain in the chest area",
      possibleCauses: [
        "Heart Attack",
        "Angina",
        "Muscle Strain",
        "Acid Reflux"
      ],
      redFlags: [
        "Severe crushing pain",
        "Radiating to arm/jaw",
        "Accompanied by shortness of breath"
      ],
      relatedSymptoms: [
        "shortness_breath",
        "sweating",
        "nausea"
      ],
      bodySystems: ["Cardiovascular", "Respiratory"],
      severity: {
        mild: "Mild discomfort, no limitation of activities",
        moderate: "Noticeable pain, some limitation",
        severe: "Intense pain, significant limitation",
        emergency: "Crushing pain, inability to function"
      },
      commonAgeGroups: ["adult", "senior"],
      genderPrevalence: ["all"],
      typicalDuration: ["acute", "chronic"],
      diagnosticTests: ["ECG", "Stress Test", "Blood Tests"]
    }
    // ... more symptoms
  ]
};

export const mockData = writable<MedicalData>(initialData); 