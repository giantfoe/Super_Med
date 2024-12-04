import { writable } from 'svelte/store';

// Common symptoms with their associated conditions
export const symptoms = {
  respiratory: [
    "Shortness of breath",
    "Wheezing",
    "Chest tightness",
    "Dry cough",
    "Wet cough",
    "Rapid breathing"
  ],
  cardiovascular: [
    "Chest pain",
    "Heart palpitations",
    "Irregular heartbeat",
    "Swelling in legs",
    "Dizziness when standing"
  ],
  gastrointestinal: [
    "Nausea",
    "Vomiting",
    "Diarrhea",
    "Constipation",
    "Abdominal pain",
    "Bloating",
    "Loss of appetite"
  ],
  neurological: [
    "Headache",
    "Migraine",
    "Dizziness",
    "Confusion",
    "Memory problems",
    "Tremors",
    "Balance problems"
  ],
  musculoskeletal: [
    "Joint pain",
    "Muscle weakness",
    "Back pain",
    "Stiffness",
    "Limited range of motion"
  ]
};

// Common conditions with their typical symptoms
export const conditions = {
  "Hypertension": {
    symptoms: ["Headache", "Dizziness", "Chest pain"],
    severity: "moderate",
    urgency: "schedule appointment",
    commonAge: "40+",
    riskFactors: ["Obesity", "Smoking", "Family history"]
  },
  "Type 2 Diabetes": {
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision"],
    severity: "moderate",
    urgency: "schedule appointment",
    commonAge: "45+",
    riskFactors: ["Obesity", "Sedentary lifestyle", "Family history"]
  },
  "Asthma": {
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
    severity: "varies",
    urgency: "varies",
    commonAge: "any",
    riskFactors: ["Allergies", "Family history", "Smoking"]
  }
  // ... more conditions
};

// Severity levels for symptom tracking
export const severityLevels = [
  { value: 1, label: "Mild", description: "Noticeable but not interfering with daily activities" },
  { value: 2, label: "Moderate", description: "Somewhat interfering with daily activities" },
  { value: 3, label: "Severe", description: "Interfering with daily activities" },
  { value: 4, label: "Very Severe", description: "Severe and impacting daily activities" },
  { value: 5, label: "Extreme", description: "Extremely severe and significantly impacting daily activities" }
]; 