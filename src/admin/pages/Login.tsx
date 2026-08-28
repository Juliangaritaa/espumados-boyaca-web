import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, LockKeyhole } from "lucide-react";

import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setError("");
    setLoading(true);

    try {

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("Correo o contraseña incorrectos.");
        return;
      }

      navigate("/admin", {
        replace: true,
      });

    } catch (error) {

      console.error(error);

      setError(
        "Ocurrió un error al iniciar sesión."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-muted/40
        px-6
      "
    >

      <Card className="w-full max-w-md">

        <CardHeader className="text-center">

          <div
            className="
              mx-auto
              mb-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-primary
              text-primary-foreground
            "
          >
            <LockKeyhole className="h-5 w-5" />
          </div>

          <CardTitle className="text-2xl">
            Panel administrativo
          </CardTitle>

          <CardDescription>
            Ingresa tus credenciales para continuar.
          </CardDescription>

        </CardHeader>

        <CardContent>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <Field>

              <FieldLabel htmlFor="email">
                Correo electrónico
              </FieldLabel>

              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="admin@empresa.com"
                autoComplete="email"
                required
              />

            </Field>

            <Field>

              <FieldLabel htmlFor="password">
                Contraseña
              </FieldLabel>

              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />

            </Field>

            {error && (
              <FieldError>
                {error}
              </FieldError>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >

              {loading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}

              {loading
                ? "Iniciando sesión..."
                : "Iniciar sesión"
              }

            </Button>

          </form>

        </CardContent>

      </Card>

    </main>
  );
}