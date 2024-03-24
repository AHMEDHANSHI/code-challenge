function getPayee() {

    const basicSalary = parseInt(prompt("please enter your basic salary"))
    const benefits = parseInt(prompt("please enter your monthly benefits"))

    const grossSalary = basicSalary + benefits;

    const taxable = basicSalary 
    const paye = rate*taxable;
    const deductions=payee + nssf +nhif
    const netpay=grosspay-deductions

    var rate = 0;
    var nssf = 0;
    var nhif = 0;
    

    //rate
    if (taxable <= 24000){
        rate = 0.1;
    }else if (taxable >240001 && taxable <=32333){
        rate = 0.25;
    }else if(taxable>32334 && taxable <=500000){
        rate = 0.3;
    }else if(taxable>500001 && taxable <=800000){
        rate = 0.325;
    }
    else if(taxable>800001){
        rate = 0.35;
    }


// nssf rates
    
    if(grossSalary <=7000){
        nssf =0.6
            
        }else if(grossSalary<=3600) {
            nssf=0.12

        }

    
            
        
    
    
    
    // nhif rates 


    if(grossSalary <=59000){
        nhif=0.25;

    }else if(grossSalary >6000 && grossSalary <= 7999){
        nhif = 0.375;
    }else if(grossSalary <=8000 && grossSalary <=11999){
        nhif = 0.33;
    }else if(grossSalary >12000 && grossSalary <= 14999) {
        nhif = 0.33

    }else if(grossSalary>15000 && grossSalary <=19999) {
        nhif=0.33

    }else if(grossSalary>20000 && grossSalary<=24999){
        nhif=0.3

    }else if(grossSalary>25000 && grossSalary <=29999){
        nhif=0.28

    }else if(grossSalary>30000 && grossSalary<=34999){
        nhif=0.26

    }else if(grossSalary>35000 &&grossSalary <=  39999){
        nhif=0.23

    }else if(grossSalary>40000 &&grossSalary <=  44999){
        nhif=0.22

    }else if(grossSalary>45000 && grossSalary <= 99999){
        nhif=0.22

    }else if(grossSalary>100000){
        nhif=0.59

    }

    






}