/* bonus 2*/
SELECT TenantID, AptID COUNT(*) TenantID FROM AptTenants GROUP BY TenantID, AptID HAVING COUNT(*) > 1
/* bonus ii*/
SELECT * from Buildings
SELECT * from   Requests WHERE Status = "Open"

