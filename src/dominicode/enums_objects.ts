/* Enums
   Permite definir un conjunto de constantes con nombre */

enum Roles {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPERADMIN"
}
console.log(Roles.Admin);

/* Objects
   Permite definir un conjunto de constantes con nombre */

const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
}
console.log(roles.Admin);
