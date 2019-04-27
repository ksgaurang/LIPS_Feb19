export interface IInsuranceProvider {
    name: string;
    cashLess: boolean;
    dailyLimit: number;
    coverage: number;
    activateFrom: Date;
}
