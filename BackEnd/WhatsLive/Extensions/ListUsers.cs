using WhatsLive.Entities;

namespace WhatsLive.Extensions;

public static class ListUsers
{
    public static readonly List<Users> users = 
    [
        new Users
        {
            Id = Guid.NewGuid(),
            Name = "Itadori"
        },
        new Users
        {
            Id = Guid.NewGuid(),
            Name = "Gojo"
        },
        new Users
        {
            Id = Guid.NewGuid(),
            Name = "Higuruma"
        },
    ];
}