export default defineNuxtPlugin((nuxtApp) => {
  // Example: Inject a global function
  nuxtApp.provide('myInjectedFunction', (string) =>
    console.log('This is an example:', string)
  );
});
