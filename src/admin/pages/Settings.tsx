import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { SiteSettings } from "@/types/site.settings";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/settings.hook";
import { SettingsForm } from "../components/SettingsForm";
import { toast } from 'react-toastify';
import { updateSetting } from "@/services/settings.service";

export default function Settings() {
  const {settings, reload} = useSettings();
  const [open, setOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<SiteSettings | null>(null);

  if (!settings) {
    return <p className="text-muted-foreground p-4">Cargando...</p>;
  }

    const handleSubmit = async (values: SiteSettings) => {
    try {
      if (selectedSetting) {
        await updateSetting(selectedSetting.id, {
          ...values
        });
      } 
      toast.success("Configuración actualizada correctamente.");
      await reload();

      setOpen(false); 
      setSelectedSetting(null);
    } catch (error) {
      console.error(error);
      toast.error("No fue posible actualizar la configuración");
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Configuración</CardTitle>
            <CardDescription>Administra la configuración del sitio.</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre de la Compañía</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Teléfono 1</TableHead>
                <TableHead>Teléfono 2</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>{settings.company_name}</TableCell>
                <TableCell>{settings.hero_title}</TableCell>
                <TableCell>{settings.hero_description}</TableCell>
                <TableCell>{settings.phone_one}</TableCell>
                <TableCell>{settings.phone_two}</TableCell>
                <TableCell>{settings.email}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSelectedSetting(settings);
                      setOpen(true);
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Editar Configuración</DialogTitle>
          </DialogHeader>

          { <SettingsForm
            defaultValues={selectedSetting ?? undefined}
            onSubmit={handleSubmit}
          /> }
        </DialogContent>
      </Dialog>
    </>
  );
}