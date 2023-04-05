/*class EmployeePayRollData
{
    id;
    salary;


    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary=salary;
    }
    get name()
    {
        return this._name;
    }
    
    set name(name)
    {
        this._name = name;
    }
    tostring()
    {
        return "id = "+this.id+" ,name = " +this.name+", salary = "+this.salary;

    }

}

let employeePayRollData = new EmployeePayRollData(1,"Siri",7000);
console.log(employeePayRollData.tostring());*/



/*class EmployeePayRollData
{
    id;
    salary;
    gender;
    statDate;
    

    constructor(id,name,salary,gender,statDate)
    {
        this.id = id;
        this.name = name;
        this.salary=salary;
        this.gender=gender;
        this.statDate=statDate;
    }
    get name()
    {
        return this._name;
    }
    
    set name(name)
    {
        this._name = name;
    }
    tostring()
    {
        return "id = "+this.id+" ,name = " +this.name+", salary = "+this.salary
        +", gender = "+this.gender+", statDate = "+this.statDate;

    }

}

let employeePayRollData = new EmployeePayRollData(1,"siri",9000,"F",new Date());
console.log(employeePayRollData.tostring()); */


// we can do like using param................................
/*class EmployeePayRollData
{
    id;
    salary;
    gender;
    statDate;
    

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.statDate=params[4];
    }
    get name()
    {
        return this._name;
    }
    
    set name(name)
    {
        this._name = name;
    }
    tostring()
    {
        return "id = "+this.id+" ,name = " +this.name+", salary = "+this.salary
        +", gender = "+this.gender+", statDate = "+this.statDate;

    }

}

let employeePayRollData = new EmployeePayRollData(1,"Siri",9000,"F",new Date());
console.log(employeePayRollData.tostring()); */

class EmployeePayRollData
{
    id;
    salary;
    gender;
    statDate;
    

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.statDate=params[4];
    }
    get name()
    {
        return this._name;
    }
    
    set name(name)
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        this._name=name;
        else
        throw 'Name is Incorrect';
    }
    tostring()
    {
        return "id = "+this.id+" ,name = " +this.name+", salary = "+this.salary
        +", gender = "+this.gender+", statDate = "+this.statDate;

    }

}

let employeePayRollData = new EmployeePayRollData(1,"Siri",6000,"F",new Date());
console.log(employeePayRollData.tostring());

try{
    employeePayRollData.name = "Sunny";
    console.log(employeePayRollData.tostring());

}
catch(e)
{
    console.log(e);
}