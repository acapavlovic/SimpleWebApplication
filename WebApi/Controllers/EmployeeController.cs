using DataAccess;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET api/employee
        public IEnumerable<Employee> Get()
        {
            using (var _context = new EmployeeModel())
            {
                return _context.Employees.ToList();
            }
        }

        // GET api/employee/5
        public Employee Get(int id)
        {
            using (var _context = new EmployeeModel())
            {
                return _context.Employees.FirstOrDefault(e => e.Id == id);
            }
        }

        // POST api/values
        public IHttpActionResult Post(Employee value)
        {
            if (!ModelState.IsValid)
                return BadRequest("Something failed!");

            using (var _context = new EmployeeModel())
            {
                _context.Employees.Add(value);
                _context.SaveChanges();
            }

            return Ok();
        }

        // PUT api/values/5
        public void Put(int id, Employee value)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest("Something failed!");

            using (var _context = new EmployeeModel())
            {
                var employee = _context.Employees.FirstOrDefault(e => e.Id == id);
                employee.FirstName = value.FirstName;
                employee.LastName = value.LastName;
                employee.Job = value.Job;

                _context.SaveChanges();
            }

            //return Ok();
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Something failed!");

            using (var _context = new EmployeeModel())
            {
                var employee = _context.Employees.FirstOrDefault(e => e.Id == id);
                _context.Employees.Remove(employee);
                _context.SaveChanges();
            }

            return Ok();
        }
    }
}
