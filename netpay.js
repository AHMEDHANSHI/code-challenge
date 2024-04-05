// netpay program

function getPayee() {
    const basicSalary = parseInt(prompt("Please enter your basic salary"));
    const benefits = parseInt(prompt("Please enter your monthly benefits"));

    let grossSalary = basicSalary + benefits;

    let rate = 0;
    let nssfRate = 0;
    let nhifRate = 0;

    // Calculate tax rate based on gross salary
    if (grossSalary <= 24000) {
        rate = 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        rate = 0.25;
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        rate = 0.3;
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        rate = 0.325;
    } else {
        rate = 0.35;
    }

    // Calculate NSSF rate based on gross salary
    if (grossSalary <= 7000) {
        nssfRate = 0.06;
    } else if (grossSalary <= 3600) {
        nssfRate = 0.12;
    }

    // Calculate NHIF rate based on gross salary
    if (grossSalary <= 59000) {
        nhifRate = 0.25;
    } else if (grossSalary <= 7999) {
        nhifRate = 0.375;
    } else if (grossSalary <= 11999) {
        nhifRate = 0.33;
    } else if (grossSalary <= 14999) {
        nhifRate = 0.33;
    } else if (grossSalary <= 19999) {
        nhifRate = 0.33;
    } else if (grossSalary <= 24999) {
        nhifRate = 0.3;
    } else if (grossSalary <= 29999) {
        nhifRate = 0.28;
    } else if (grossSalary <= 34999) {
        nhifRate = 0.26;
    } else if (grossSalary <= 39999) {
        nhifRate = 0.23;
    } else if (grossSalary <= 44999) {
        nhifRate = 0.22;
    } else if (grossSalary <= 99999) {
        nhifRate = 0.22;
    } else {
        nhifRate = 0.59;
    }

    let payee = rate * grossSalary;
    let nssf = grossSalary * nssfRate;
    let nhif = grossSalary * nhifRate;
    let netpay = grossSalary - payee - nhif - nssf;

    return {
        payee,
        grossSalary,
        netpay,
        nssf,
        nhif
    };
}

// Call the function and store the result
const payslip = getPayee();
console.log(payslip);