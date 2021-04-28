using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PeopleCarsReact.Data;

namespace PeopleCarsReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private readonly string _connectionString;

        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addPerson")]
        public void Add(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.Add(person);
        }

        [HttpPost]
        [Route("addCar")]
        public void Add(Car car)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.Add(car);
        }

        [HttpGet]
        [Route("getAll")]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetAllPeople();
        }

        [HttpGet]
        [Route("getCarsById")]

        public List<Car> GetCarsById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCarById(id);
        }

        [HttpPost]
        [Route("deleteCars")]
        public void DeleteCars(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(person.Id);
        }
    }
}
