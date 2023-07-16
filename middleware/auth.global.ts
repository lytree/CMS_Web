export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath.includes('admin')) {
    // eslint-disable-next-line no-console
    console.log(to.fullPath)
    navigateTo('/admin/index')
  }
})
