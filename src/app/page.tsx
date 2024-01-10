import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={'text-6xl font-semibold text-white drop-shadow-md'}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">Um serviço de autenticação simples</p>
        <div>
          <LoginButton asChild>
            <Button variant="secondary" size="lg">
              Fazer login
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
