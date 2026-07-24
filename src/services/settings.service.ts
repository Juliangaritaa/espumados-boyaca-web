import { supabase } from "@/lib/supabase";
import type { SiteSettings } from "@/types/site.settings"

export async function getSettings() {
    const { data, error } = await supabase
        .from("settings")
        .select("*")
        .eq("id",1)
        .single();

    if(error) throw error;
    return data;
}

export async function updateSetting(id: string, setting: Partial<SiteSettings>) {
    const { data, error } = await supabase
    .from("settings")
    .update(setting)
    .eq("id", id)
    .select()
    .single();

    if (error) throw error;

    return data;
}