using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;



namespace AspNetIdentity.WebApi.Infrastructure
{
    public static class StringExt
    {
        public static string Truncate(this string value, int maxLength)
        {
            if (string.IsNullOrEmpty(value)) { return value; }

            return value.Substring(0, Math.Min(value.Length, maxLength));
        }
    }
    public static class ExtendedClaimsProvider
    {
        public static IEnumerable<Claim> GetClaims(ApplicationUser user)
        {
          
            List<Claim> claims = new List<Claim>();

            var daysInWork =  (DateTime.Now.Date - user.JoinDate).TotalDays;

            if (daysInWork > 90)
            {
                claims.Add(CreateClaim("FTE", "1"));
               
            }
            else {
                claims.Add(CreateClaim("FTE", "0"));
            }

            //Evaluar municipio por lada
            var lada = user.PhoneNumber.Truncate(3);
            if (lada != null)
            {
                switch (lada)
                {
                    case "646":
                        claims.Add(CreateClaim("Municipio", "Ensenada"));
                        break;
                    case "664":
                        claims.Add(CreateClaim("Municipio", "Tijuana"));
                        break;
                    case "686":
                        claims.Add(CreateClaim("Municipio", "Mexicali"));
                        break;
                    default:
                        claims.Add(CreateClaim("Municipio", "Foraneo"));
                        break;
                }
            } else
            {
                claims.Add(CreateClaim("Municipio", "-Indefinido-"));
            }

            return claims;
        }

        public static Claim CreateClaim(string type, string value)
        {
            return new Claim(type, value, ClaimValueTypes.String);
        }

    }
}