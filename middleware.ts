import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Make "/" accessible to all users
  publicRoutes: ['/', '/api/webhooks/clerk' , '/api/webhooks/stripe']
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};


// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware()

// export const config = {

//   matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };


// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes: ['/', '/api/webhooks/clerk' , '/api/webhooks/stripe']
// })

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// }; 