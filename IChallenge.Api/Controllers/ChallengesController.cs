using System.Threading.Tasks;
using IChallenge.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Raven.Client;

namespace IChallenge.Api.Controllers
{
    [Route("api/[controller]")]
    public class ChallengesController : Controller
    {
        private IAsyncDocumentSession _session;


        public ChallengesController(IAsyncDocumentSession session)
        {
            this._session = session;
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _session.Query<Challenge>().ToListAsync());
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetChallenge" )]
        public async Task<IActionResult> Get(string id)
        {
            Challenge result;
            result = await _session.LoadAsync<Challenge>(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Challenge value)
        {
            await _session.StoreAsync(value);
            await _session.SaveChangesAsync();
            return CreatedAtRoute("GetChallenge", new { id = value.Id }, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Challenge value)
        {
            Challenge existing;

            existing = await _session.LoadAsync<Challenge>(id);

            if (existing == null)
            {
                return NotFound();
            }

            existing.Name = value.Name;
            existing.Description = value.Description;
            await _session.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            Challenge existing;

            existing = await _session.LoadAsync<Challenge>(id);

            if(existing == null)
            {
                return NotFound();
            }

            _session.Delete(existing);
            await _session.SaveChangesAsync();

            return NoContent();
        }
    }
}
