using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PeopleCarsReact.Data
{
    public class PeopleCarsRepository
    {
        private readonly string _connectionString;
        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Person person)
        {
            using var context = new PeopleDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }

        public void Add(Car car)
        {
            using var context = new PeopleDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }

        public List<Person> GetAllPeople()
        {
            using var context = new PeopleDataContext(_connectionString);
            return context.People.Include(c => c.Cars).ToList();
        }

        public void DeleteCars(int id)
        {
            using var context = new PeopleDataContext(_connectionString);
            context.Cars.RemoveRange(context.Cars.Where(c => c.PersonId == id));
            context.SaveChanges();
        }

        public List<Car> GetCarById(int id)
        {
            using var context = new PeopleDataContext(_connectionString);
            return (List<Car>)context.Cars.Where(c => c.PersonId == id);
        }


    }
}
