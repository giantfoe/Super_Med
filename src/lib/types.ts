export interface Symptom {
  id: string;
  name: string;
  description: string;
  possibleCauses: string[];
  redFlags: string[];
  relatedSymptoms: string[];
  bodySystems: string[];
  severity: {
    mild: string;
    moderate: string;
    severe: string;
    emergency: string;
  };
  commonAgeGroups: string[];
  genderPrevalence: string[];
  typicalDuration: string[];
  diagnosticTests: string[];
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  riskFactors: string[];
  complications: string[];
  treatments: Treatment[];
  recoveryStages: RecoveryStage[];
  urgency: string;
  commonAgeGroups: string[];
  genderPrevalence: string[];
  specialistTypes: string[];
}

export interface Treatment {
  type: string;
  options: string[];
  description: string;
}

export interface RecoveryStage {
  phase: string;
  duration: string;
  description: string;
}

export interface DiagnosticResult {
  condition: Condition;
  score: number;
  matchingSymptoms: string[];
}

export interface BodySystem {
  parts: string[];
  commonSymptoms: Symptom[];
  relatedConditions: string[];
} 