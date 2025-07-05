using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PTCGMetaBuddy.Api.Models;

/// <summary>
/// Represents a single Pokémon TCG card.
/// The structure is based on the PokemonTCG.io API's Card object.
/// </summary>
public class Card
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public required string Id { get; set; }

    public required string Name { get; set; }

    public required string Supertype { get; set; }

    public List<string>? Subtypes { get; set; }

    public string? Hp { get; set; }

    public List<string>? Types { get; set; }

    public List<string>? Rules { get; set; }

    public string? EvolvesFrom { get; set; }

    public required string SetId { get; set; }

    // We will add a navigation property to the Set object later.
    // public Set Set { get; set; }

    public required string SetNumber { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public string? Rarity { get; set; }

    public string? Artist { get; set; }

    public string? RegulationMark { get; set; }

    public required string ImageSmallUrl { get; set; }

    public required string ImageLargeUrl { get; set; }

    // We are intentionally omitting complex, nested objects for the MVP, such as:
    // - attacks
    // - abilities
    // - weaknesses
    // - resistances
    // - ancientTrait
    // - legalities (we will rely on RegulationMark for Standard format)
    // - tcgplayer prices
    // - cardmarket prices
    // We can add these later as needed by extending this model.
}