using Microsoft.AspNetCore.Mvc;
using WhatsLive.Entities;
using WhatsLive.Extensions;

namespace WhatsLive.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<Users>> GetAll()
    {
        return Ok(ListUsers.users);
    }
}