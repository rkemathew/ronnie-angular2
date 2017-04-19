// declare module patientInfo.d {

    export interface PatientInfo {
        mrn: string;
        pFirstName: string;
        pLastName: string;
        subFirstName: string;
        subLastName: string;
        dob: string;
        eligInfo: string;
        planCoverage: string;
    }

    export interface Benefit {
        benefitAmount: string;
        benefitPercent: string;
        eligMessage: string;
        reason: string;
        service: string;
        coverage: string;
    }

    export interface PatientInsRoot {
        batchId: string;
        patientInfo: PatientInfo;
        benefit: Benefit[];
    }

      export interface PatientEligDetails {
      batchId: string;
      patientInfo: PatientInfo;
      benefit: Benefit[];
  }

// }

