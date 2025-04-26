# Benlab

Welcome to Benlab, a Next.js 14 project featuring a 3D world built with Three.js and React Three Fiber.

## Setup Instructions

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Adding Scenes to `/world`

To add new scenes to the `/world` page:

1. Open the `WorldCanvas` component located in `components/WorldCanvas.tsx`.
2. Add your Three.js objects or animations inside the `<Canvas>` component.
3. Use React Three Fiber hooks like `useFrame` to animate objects.

## Testing

Run Playwright tests to ensure the application works as expected:

```bash
pnpm playwright test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
