import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back! 👋</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sign in to continue your food ordering journey
          </p>
        </div>
        
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg",
            },
          }}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  );
}

