// A function for prompting an individual to input his or her salary;
// The program first computes all deductions before calculating the tax and then the net salary;
// The program uses a fixed personal relief;

function calcSalary(personalRelief, netSalary,totalDeductions, contribitionBenefit,NHIFDeductions, NSSFDeductions, grossSalary, taxableIncome){
    let paye;
    personalRelief = +2400;
    grossSalary = +prompt("Enter your salary amount:")
    contribitionBenefit = +prompt("Contribution Benefit:")
    NHIFDeductions= +prompt("Enter NHIFDeduction:")
    NSSFDeductions= +prompt("Enter NSSFDeduction:")  

    //computing taxable income; 

    
    totalDeductions = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //computing monthly "pay as you earn" based on an individual's income; 

    switch(true){
        case (taxableIncome<24000):
            paye = taxableIncome * 0.01;
            break;

        case (taxableIncome>=24001 && taxableIncome<= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome>32333):
            paye = taxableIncome * 0.30;
            break;  

    }
    // deduction of "pay as you earn" and then returning netsalary; 
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`your netSalary is ksh: ${netSalary}`)
    

}
calcSalary()