var students = [ 


    { name: "John", city: "California", state: "Pennsylvania", dateOfBirth: "03/22/1964", payRate:"20.00 per hour" },


    { name: "Peter", city: "London", state: "New York", dateOfBirth: "03/24/1984", payRate:"10.00 per hour"},


    { name: "Mathew", city: "Manchester" , state: "Ohio", dateOfBirth: "08/22/1974", payRate:"15.00 per hour"},


    { name: "Jane", city: "Phoenix" , state: "Arizona", dateOfBirth: "03/08/1968", payRate:"30.00 per hour"}

]
    students.forEach(student=>console.log(student))

    const gradStudents = [ 


        { name: "John", city: "California", state: "Pennsylvania", dateOfBirth: "03/22/1964", payRate:"20.00 per hour" },
    
    
        { name: "Peter", city: "London", state: "New York", dateOfBirth: "03/24/1984", payRate:"10.00 per hour"},
    
    
        { name: "Mathew", city: "Manchester" , state: "Ohio", dateOfBirth: "08/22/1974", payRate:"15.00 per hour"},
    
    
        { name: "Jane", city: "Phoenix" , state: "Arizona", dateOfBirth: "03/08/1968", payRate:"30.00 per hour"}
    
    ]
    gradStudents.forEach(student=>console.log(student))
    
    
    
    
    const multipliers = [1,2,3,4,5,6,7,8,9,10]
    const multiplican = [1,2,3,4]
    const tableStart = 1
    const tableEnd = 12
    const table = []
    
    var result = 'x ';
    for (var i = 0; i < 11; i++) {
    
        for (var j = 0; j < 11; j++) {
    
            if(i == 0 && j > 0){
              result += '[' + j + ']';
            } 
            else if(j == 0 && i>0){
              result += '[' + i + '] ';
            } 
            else if(i>0 && j>0){
            result += (i*j) + ' ';
            }
        }
        result += '\n'
    }
    
    console.log(result);

   