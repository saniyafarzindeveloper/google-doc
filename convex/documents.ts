import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

//authorizing with clerk & convex inside backend
export const create = mutation({
  args:{title: v.optional(v.string()),  initialContent: v.optional(v.string()) },
  handler: async (ctx, args) => {
    //ctx stands for context, args stnds for arguments
    const user = await ctx.auth.getUserIdentity(); //check whether user is authenticated or not
    if(!user){
      throw new ConvexError("Unauthorized!")
    }

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled Document",
      ownerId: user.subject,
      initialContent: args.initialContent,
    })
  },

})

export const get = query({
  args:{ paginationOpts : paginationOptsValidator},
  handler: async(ctx , args) => {
    return await ctx.db.query("documents").paginate(args.paginationOpts);
  },
});