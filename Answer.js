function calculateTax(income, expense) {

    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }

    let profit = income - expense;
    let tax = profit * 0.20;

    return tax;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));




function sendNotification(email) {

    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    let parts = email.split('@');


    if (parts.length !== 2) {
        return "Invalid Email";
    }

    let username = parts[0];
    let domainName = parts[1];


    return `${username} sent you an email from ${domainName}`;
}

console.log(sendNotification('zihad@gmail.com'));        
console.log(sendNotification('farhan34@yahoo.com'));     
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));  
console.log(sendNotification('sadia8icloud.com'));       




function checkDigitsInName(name) {
   
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    let hasDigits = /\d/;

    return hasDigits.test(name);
}

console.log(checkDigitsInName("Raj123"));   
console.log(checkDigitsInName("n9ayeem"));  
console.log(checkDigitsInName("e1mu3"));    
console.log(checkDigitsInName("Suman"));    
console.log(checkDigitsInName("Name2024")); 
console.log(checkDigitsInName("!@#"));      
console.log(checkDigitsInName(["Raj"]));  




function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); 
console.log(calculateFinalScore("hello"));                                                            
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));  




function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let completedInterviews = waitingTimes.length;
    let remainingPeople = serialNumber - completedInterviews - 1;

    if (remainingPeople <= 0) {
        return 0;
    }

    let totalTime = waitingTimes.reduce((total, time) => total + time, 0);
    let averageTime = Math.round(totalTime / completedInterviews);

    let isratWaitingTime = remainingPeople * averageTime;

    return isratWaitingTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));  
console.log(waitingTime([13, 2], 6));            
console.log(waitingTime([13, 2, 6, 7, 10], 6));  
console.log(waitingTime([6], 4));               
console.log(waitingTime(7, 10));                 
console.log(waitingTime("[6,2]", 9));            
console.log(waitingTime([7, 8, 3, 4, 5], "9"));  
