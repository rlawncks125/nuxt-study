export default defineEventHandler(async (event) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Delay Data Get");
    }, 2000);
  });
});
