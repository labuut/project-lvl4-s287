export default async (ctx, next) => {
  ctx.assert(ctx.state.isSignedIn(), 500);
  await next();
};
