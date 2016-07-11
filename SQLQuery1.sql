--SELECT * FROM AspNetRoles;
--SELECT * FROM AspNetUserRoles;
--SELECT * FROM AspNetUsers;
SELECT * FROM AspNetUserClaims;



SELECT ANU.UserName, ANR.Name
FROM AspNetUsers ANU
INNER JOIN AspNetUserRoles ANUR
	ON ANUR.UserId = ANU.Id
INNER JOIN AspNetRoles ANR
	ON ANR.Id = ANUR.RoleId
ORDER BY ANU.UserName;
