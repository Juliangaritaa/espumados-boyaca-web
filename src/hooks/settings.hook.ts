import { getSettings } from "@/services/settings.service";
import { useState, useEffect } from "react";

export function useSettings() {
  const [settings, setSettings] = useState();
  useEffect(() => {
    getSettings().then(setSettings);
  }, []);

  return settings;
}
