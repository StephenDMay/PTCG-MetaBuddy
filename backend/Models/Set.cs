using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PTCGMetaBuddy.Api.Models;

/// Represents a Pokémon TCG set. 
/// The structure is based on the PokemonTCG.io API's Set object.
public class Set
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public required string Id { get; set; }
    public required string Name { get; set; }
    public required string Series { get; set; }
    public required string PrintedTotal { get; set; }
    public required string Total { get; set; }
    public required string Code { get; set; }
    public required string ReleaseDate { get; set; }
    public bool IsLegal { get; set; }
    public DateTime? RotationDate { get; set; }
    public required string LogoUrl { get; set; }
    public required string SymbolUrl { get; set; }
}