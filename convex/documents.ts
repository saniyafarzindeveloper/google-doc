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

export const removeById = mutation({
  args:{id: v.id("documents")},
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity(); //check whether user is authenticated or not
    if(!user){
      throw new ConvexError("Unauthorized to remove doc!")
    }
    const document = await ctx.db.get(args.id); //get the doc from DB
    if(!document){
      throw new ConvexError("Document not found!");
    }

    //check if we are the owner
    const isOwner = document.ownerId === user.subject;
    if(!isOwner){
      throw new ConvexError("You are not the doc owner!")
    }

    //del if no catch 
    return await ctx.db.delete(args.id);
  }
})

export const updateById = mutation({
  args:{id: v.id("documents"), title: v.string()},
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity(); //check whether user is authenticated or not
    if(!user){
      throw new ConvexError("Unauthorized to update doc!")
    }
    const document = await ctx.db.get(args.id); //get the doc from DB
    if(!document){
      throw new ConvexError("Document not found!");
    }

    //check if we are the owner
    const isOwner = document.ownerId === user.subject;
    if(!isOwner){
      throw new ConvexError("You are not the doc owner!")
    }

    //update if no catch 
    return await ctx.db.patch(args.id, {title: args.title});
  }
})