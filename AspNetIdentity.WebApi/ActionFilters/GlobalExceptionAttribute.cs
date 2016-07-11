using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


using System.Web.Http.Filters;
using System.Web.Http;
using System.Web.Http.Tracing;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using System.Net;
using AspNetIdentity.WebApi.Helpers;


namespace JusticiaTest.ActionFilters
{
    public class GlobalExceptionAttribute:ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            /*GlobalConfiguration.Configuration.Services.Replace(typeof(ITraceWriter), new NLogger());
            var trace = GlobalConfiguration.Configuration.Services.GetTraceWriter();
            trace.Error(context.Request, "Controlador : " +
                context.ActionContext.ControllerContext.ControllerDescriptor.ControllerType.FullName + Environment.NewLine + " Acción: " +
                context.ActionContext.ActionDescriptor.ActionName, context.Exception);

            var tipoExcepcion = context.Exception.GetType();
            if (tipoExcepcion == typeof(ValidationException))
            {
                var resp = new HttpResponseMessage(HttpStatusCode.BadRequest) { Content = new StringContent(context.Exception.Message), ReasonPhrase = "ValidationException", };
                throw new HttpResponseException(resp);

            }
            else if (tipoExcepcion == typeof(UnauthorizedAccessException))
            {
                //throw new HttpResponseException(context.Request.CreateResponse(HttpStatusCode.Unauthorized, new ServiceStatus() { StatusCode = (int)HttpStatusCode.Unauthorized, StatusMessage = "UnAuthorized", ReasonPhrase = "UnAuthorized Access" }));
            }*/
               
           
        }
    }
}