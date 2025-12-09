import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Join Us! 🎉</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create an account to start ordering food together
          </p>
        </div>
        
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg",
            },
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  );
}

