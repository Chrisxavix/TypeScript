"use strict";
/* Enums
   Permite definir un conjunto de constantes con nombre */
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
/* Objects
   Permite definir un conjunto de constantes con nombre */
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
