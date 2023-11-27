export default defineNuxtRouteMiddleware((to, from) => {
    // const isLoggedIn = false;
    // console.log(to);
    // if (isLoggedIn) {
    //     return navigateTo(to.fullPath);
    // }
    // return navigateTo("/login");
    console.log("hello from middleware auth");
})