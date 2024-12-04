import { get } from 'svelte/store';
import { mockData } from './mockData';
import type { Symptom, Condition, DiagnosticResult } from './types';

export const actions = {
  // Symptom tracking
  addSymptom: (symptom: Symptom, severity: number, details: any) => {
    const symptoms = get(mockData).symptoms;
    // Add validation and processing logic
    return { success: true, symptom };
  },

  // Condition matching
  findConditions: (symptoms: string[], patientData: any): DiagnosticResult[] => {
    const conditions = get(mockData).conditions;
    const matches = conditions
      .map(condition => ({
        condition,
        score: calculateMatchScore(condition, symptoms, patientData),
        matchingSymptoms: symptoms.filter(s => 
          condition.symptoms.includes(s)
        )
      }))
      .filter(match => match.score > 20)
      .sort((a, b) => b.score - a.score);

    return matches;
  },

  // Emergency assessment
  checkEmergency: (symptoms: string[]): boolean => {
    const redFlagSymptoms = get(mockData).symptoms
      .filter(s => s.redFlags && s.redFlags.length > 0)
      .map(s => s.id);
    
    return symptoms.some(s => redFlagSymptoms.includes(s));
  },

  // Treatment recommendations
  getTreatments: (conditionId: string) => {
    const condition = get(mockData).conditions
      .find(c => c.id === conditionId);
    return condition?.treatments || [];
  },

  updateSymptom: (id: string, updates: any) => {
    console.log('Updating symptom:', id, updates);
    // ... rest of the function
  },

  removeSymptom: (id: string) => {
    console.log('Removing symptom:', id);
    // ... rest of the function
  }
};

function calculateMatchScore(
  condition: Condition, 
  symptoms: string[], 
  patientData: any
): number {
  let score = 0;
  
  // Symptom matching (50%)
  const matchingSymptoms = symptoms.filter(s => 
    condition.symptoms.includes(s)
  );
  score += (matchingSymptoms.length / condition.symptoms.length) * 50;
  
  // Age matching (20%)
  if (condition.commonAgeGroups.includes(patientData.ageGroup)) {
    score += 20;
  }
  
  // Gender matching (10%)
  if (condition.genderPrevalence.includes(patientData.gender)) {
    score += 10;
  }
  
  // Risk factors (20%)
  const matchingRiskFactors = condition.riskFactors
    .filter(rf => patientData.riskFactors.includes(rf));
  score += (matchingRiskFactors.length / condition.riskFactors.length) * 20;
  
  return Math.min(100, score);
} 