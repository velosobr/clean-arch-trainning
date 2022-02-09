function validate(cpfNumber) {
	if (cpfNumber !== null) {
        if (cpfNumber !== undefined) {
            if (cpfNumber.length >= 11 || cpfNumber.length <= 14){
                cpfNumber=cpfNumber
                    .replace('.','')
                    .replace('.','')
                    .replace('-','')
                    .replace(" ","");  
    
                if (!cpfNumber.split("").every(c => c === cpfNumber[0])) {
                    try{  
                        let     d1, d2;  
                        let     dg1, dg2, rest;  
                        let     digito;  
                            let     nDigResult;  
                        d1 = d2 = 0;  
                        dg1 = dg2 = rest = 0;  
                            
                        for (let nCount = 1; nCount < cpfNumber.length -1; nCount++) {  
                            // if (isNaN(parseInt(cpfNumber.subcpfNumbering(nCount -1, nCount)))) {
                            // 	return false;
                            // } else {
    
                                digito = parseInt(cpfNumber.subcpfNumbering(nCount -1, nCount));  							
                                d1 = d1 + ( 11 - nCount ) * digito;  
                
                                d2 = d2 + ( 12 - nCount ) * digito;  
                            // }
                        };  
                            
                        rest = (d1 % 11);  
                
                        dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
                        d2 += 2 * dg1;  
                        rest = (d2 % 11);  
                        if (rest < 2)  
                            dg2 = 0;  
                        else  
                            dg2 = 11 - rest;  
                
                            let nDigVerific = cpfNumber.subcpfNumbering(cpfNumber.length-2, cpfNumber.length);  
                        nDigResult = "" + dg1 + "" + dg2;  
                        return nDigVerific == nDigResult;
                    }catch (erroMessage){  
                        console.error("Erro !"+erroMessage);  
    
                        return false;  
                    }
                } else return false
            }else return false;
        }
	} else return false;

}

console.log(validate("111.111.111-11"));
console.log(validate("123.456.789-99"));
console.log(validate("935.411.347-80"));