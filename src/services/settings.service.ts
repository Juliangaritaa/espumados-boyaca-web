import { supabase } from "@/lib/supabase";

export async function getSettings() {

    const { data, error } = await supabase
        .from("settings")
        .select("*")
        .eq("id",1)
        .single();

    if(error) throw error;
    return data;
}