import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/ui";
import { useEffect, useState } from "react";

import { supabase } from "../../lib/initSupabase";

import styles from "./AuthWrapper.module.scss";

interface AuthWrapperProps {
  children: React.ReactNode;
}

function AuthWrapper({ children }: AuthWrapperProps) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log("session", session);

  return (
    <div className={styles.Wrapper}>
      {!session?.user ? (
        <div className={styles.Login}>
          <div className={styles.Form}>
            <Auth
              supabaseClient={supabase}
              //providers={["google", "github"]}
              //socialLayout="horizontal"
              //socialButtonSize="xlarge"
            />
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default AuthWrapper;
