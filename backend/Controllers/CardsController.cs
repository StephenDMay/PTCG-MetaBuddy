using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PTCGMetaBuddy.Api.Data;
using PTCGMetaBuddy.Api.Models;

namespace PTCGMetaBuddy.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CardsController : ControllerBase
{
    private readonly AppDbContext _context;

    public CardsController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/Cards
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Card>>> GetCards()
    {
        return await _context.Cards.ToListAsync();
    }

    // GET: api/Cards/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Card>> GetCard(string id)
    {
        var card = await _context.Cards.FindAsync(id);

        if (card == null)
        {
            return NotFound();
        }

        return card;
    }

    // POST: api/Cards
    [HttpPost]
    public async Task<ActionResult<Card>> PostCard(Card card)
    {
        _context.Cards.Add(card);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetCard", new { id = card.Id }, card);
    }

    // PUT: api/Cards/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCard(string id, Card card)
    {
        if (id != card.Id)
        {
            return BadRequest();
        }

        _context.Entry(card).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CardExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/Cards/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCard(string id)
    {
        var card = await _context.Cards.FindAsync(id);
        if (card == null)
        {
            return NotFound();
        }

        _context.Cards.Remove(card);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool CardExists(string id)
    {
        return _context.Cards.Any(e => e.Id == id);
    }
}
