import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        greeting: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const count = await ctx.prisma.feedback.count();

      return {
        message: `Feedbacks: ${count}`,
      };
    }),

  createFeedback: procedure
    .input(
      z.object({
        type: z.string(),
        content: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.feedback.create({
        data: {
          type: input.type,
          content: input.content,
        },
      });
    }),

  createModule: procedure
    .input(
      z.object({
        nameModule: z.string(),
        boxWidth: z.number(),
        boxHeight: z.number(),
        boxDepth: z.number(),
        moduleType: z.string(),
        frontType: z.string(),
        knobType: z.string(),
        hingsType: z.string(),
        slideType: z.string(),
        bottomType: z.string(),
        boxThickness: z.number(),
        frontThickness: z.number(),
        bottomThickness: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.modules.create({
        data: {
          nameModule: input.nameModule,
          boxWidth: input.boxWidth,
          boxHeight: input.boxHeight,
          boxDepth: input.boxDepth,
          moduleType: input.moduleType,
          frontType: input.frontType,
          knobType: input.knobType,
          hingsType: input.hingsType,
          slideType: input.slideType,
          bottomType: input.bottomType,
          boxThickness: input.boxThickness,
          frontThickness: input.frontThickness,
          bottomThickness: input.bottomThickness,
        },
      });
    }),
});

export type AppRouter = typeof appRouter;
