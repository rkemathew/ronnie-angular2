    export interface IPatientInfo {
        mrn: string;
        pFirstName: string;
        pLastName: string;
        subFirstName: string;
        subLastName: string;
        dob: string;
        eligInfox: string;
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
        insLink: string;
        patientInfo: IPatientInfo;
        cmpData: ICmpData[];
    }


