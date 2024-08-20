module.exports = cds.service.impl( async function(){
    const { EmployeeSet } = this.entities;
    this.before('UPDATE',EmployeeSet, async(req)=>{
        var salary = req.data.salaryAmount;
        if (salary > 10000){
            req.error(500,'olo cant be more than 1000000')

        }
    })
    this.after('READ', EmployeeSet,(data)=>{
        data.push({
            "ID":"CUSTOM",
            "nameFirst":"SHIVA"
        })

    })

    this.before('CREATE',EmployeeSet, async(req)=>{
        var salary = req.data.salaryAmount;
        if (salary > 10000){
            req.error(500,'olo cant be more than 1000000')
        }
    })
})