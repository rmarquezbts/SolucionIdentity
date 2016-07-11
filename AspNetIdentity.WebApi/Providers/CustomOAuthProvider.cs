using AspNetIdentity.WebApi.Infrastructure;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.Identity.Owin;
using System.DirectoryServices.AccountManagement;
using System.Configuration;
//using System.DirectoryServices.ActiveDirectory;

namespace AspNetIdentity.WebApi.Providers
{
    public class CustomOAuthProvider : OAuthAuthorizationServerProvider
    {

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            return Task.FromResult<object>(null);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            var allowedOrigin = "*";
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { allowedOrigin });
            var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();

            //VERIFICAR SI LA VALIDACION DEL USUARIO SERÁ POR ACTIVE DIRECTORY
            if (ConfigurationManager.AppSettings["ActiveDirectory"] == "S")
            {
                if (!AuthenticateAD(context))
                {
                    context.SetError("invalid_grant", "The user name or password is incorrect.");
                    return;
                }
            }
            ApplicationUser user = await userManager.FindAsync(context.UserName, context.Password);
            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }
            if (!user.EmailConfirmed)
            {
                context.SetError("invalid_grant", "User did not confirm email.");
                return;
            }            
            ClaimsIdentity oAuthIdentity = await user.GenerateUserIdentityAsync(userManager, "JWT");


            //AUTORIZACION BASADO EN CLAIMS Y ROLES CREADOS ON THE FLY
                oAuthIdentity.AddClaims(ExtendedClaimsProvider.GetClaims(user));
                oAuthIdentity.AddClaims(RolesFromClaims.CreateRolesBasedOnClaims(oAuthIdentity));
            //AUTORIZACION BASADO EN CLAIMS Y ROLES CREADOS ON THE FLY


            var ticket = new AuthenticationTicket(oAuthIdentity, null);            
            context.Validated(ticket);           
        }

        public bool AuthenticateAD(OAuthGrantResourceOwnerCredentialsContext context)
        {
            bool esValido = false;
            using (var con = new PrincipalContext(ContextType.Domain, "BTS"))
            {
                esValido = con.ValidateCredentials(context.UserName, context.Password);

            }
            return esValido;
        }
    }
}