    export interface IPatientInfo {
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

    export interface ICmpData {
        label: string;
        emrData: string;
        elgData: string;
    }

    export interface IEligFailDetail {
        batchId: string;
        patientInfo: IPatientInfo;
        cmpData: ICmpData[];
    }


