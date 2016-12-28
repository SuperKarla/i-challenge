using System;

namespace IChallenge.Api.Models
{
    public class Challenge
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
