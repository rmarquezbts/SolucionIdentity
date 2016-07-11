using AspNetIdentity.WebApi.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AspNetIdentity.WebApi.Controllers
{
    [RoutePrefix("api/orders")]
    public class OrdersController : ApiController
    {
        [Authorize(Roles = "IncidentResolvers")]
        [HttpPut]
        [Route("refund/{orderId}")]
        public IHttpActionResult RefundOrder([FromUri]string orderId)
        {
            return Ok();
        }


        // AUTORIZACION POR ROLES FIJOS
        [Authorize(Roles = "Admin")]
        [Route("PorRoles")]
        public IHttpActionResult PorRoles()
        {
            try
            {
                //var zero = 0; var i = 1 / zero;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return Ok();
        }

        // AUTORIZACION POR USUARIO
        [Authorize(Users = "Panchito")]
        [Route("PorUsuario")]
        public IHttpActionResult PorUsuario()
        {
            return Ok();
        }

        // AUTORIZACION CON CLAIMS Y ROLES DINAMICOS
        [Authorize(Roles = "Oficina Autorizada")]
        [Route("OficinaAutorizada")]
        public IHttpActionResult OficinaAutorizada()
        {
            return Ok();
        }

        //AUTORIZACION CUSTOM BASADA EN CLAIMS
        [ClaimsAuthorization(ClaimType="Municipio", ClaimValue="Ensenada")]
        [Route("CustomPorMunicipio")]
        public IHttpActionResult CustomPorMunicipio()
        {
            return Ok();
        }

    }
}
