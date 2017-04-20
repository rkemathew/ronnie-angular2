    export interface PatientInfo {
        mrn: string;
        pFirstName: string;
        pLastName: string;
        subFirstName: string;
        subLastName: string;
        dob: string;
        eligInfo: string;
        planCoverage: string;
        insuranceId: string;
    }

    export interface CmpData {
        label: string;
        emrData: string;
        elgData: string;
    }

    export interface IEligFailDetail {
        batchId: string;
        insLink: string;
        patientInfo: PatientInfo;
        cmpData: CmpData[];
    }


