import { getSettings } from "@/services/settings.service";
import { useState, useEffect, useCallback } from "react";
import type { SiteSettings } from "@/types/site.settings";

export function useSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  const fetchSettings = useCallback(async () => {
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (error) {
      console.error("Error al cargar la configuración:", error);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return {
    settings,
    reload: fetchSettings,
  };
}