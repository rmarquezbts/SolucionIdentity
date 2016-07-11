using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


using System.Web.Http.Filters;
using System.Web.Http.Controllers;
using System.Web.Http.Tracing;
using System.Web.Http;
using AspNetIdentity.WebApi.Helpers;


namespace AspNetIdentity.WebApi.ActionFilters
{
    public class LoggingFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext filterContext)
        {
           
            /*GlobalConfiguration.Configuration.Services.Replace(typeof(ITraceWriter), new NLogger());
            var trace = GlobalConfiguration.Configuration.Services.GetTraceWriter();
            trace.Info(filterContext.Request, "Controlador : " + filterContext.ControllerContext.ControllerDescriptor.ControllerType.FullName + Environment.NewLine + "Acción: " + filterContext.ActionDescriptor.ActionName, "JSON", filterContext.ActionArguments);*/
        
    }
    
    }
}